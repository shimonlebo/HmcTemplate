import { Component, input, output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface FileWithPreview extends File {
  preview?: string;
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  acceptedTypes = input<string>('');
  maxSize = input<number>(5 * 1024 * 1024); // Default max size 5MB
  multiple = input<boolean>();
  filesSelected = output<FileWithPreview[]>();
  files: FileWithPreview[] = [];
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;


  onFileSelect(event: any) {
    const selectedFiles = event.target.files as FileList;
    this.processFiles(selectedFiles);
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.processFiles(droppedFiles as FileList);
    }
  }

  processFiles(fileList: FileList) {
    const newFiles: FileWithPreview[] = Array.from(fileList).map(file => {
      const fileWithPreview = file as FileWithPreview;
      if (this.validateFile(fileWithPreview)) {
        fileWithPreview.preview = this.createFilePreview(fileWithPreview);
      }
      return fileWithPreview;
    }).filter(file => file.preview !== undefined);

    this.files.push(...newFiles);
    this.filesSelected.emit(this.files);
  }

  validateFile(file: FileWithPreview): boolean {
    if (this.acceptedTypes()) {
      const acceptedTypesArray = this.acceptedTypes().split(',').map(type => type.trim());
      const fileTypeMatches = acceptedTypesArray.some(type => file.type === type || file.name.endsWith(type));
  
      if (!fileTypeMatches) {
        alert(`File type not allowed: ${file.type}`);
        return false;
      }
    }
  
    if (file.size > this.maxSize()) {
      alert(`File size exceeds the maximum allowed size of ${this.formatFileSize(this.maxSize())}`);
      return false;
    }
  
    return true;
  }  

  createFilePreview(file: FileWithPreview): string {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        file.preview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    return '';
  }

  formatFileSize(size: number): string {
    if (size < 1024) {
      return size + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(1) + ' KB';
    } else {
      return (size / (1024 * 1024)).toFixed(1) + ' MB';
    }
  }

  isImage(file: FileWithPreview): boolean {
    return file.type.startsWith('image/');
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
    this.filesSelected.emit(this.files);

    // Reset the file input value
    if (this.files.length === 0) {
      this.fileInput.nativeElement.value = '';
    }
  }
}

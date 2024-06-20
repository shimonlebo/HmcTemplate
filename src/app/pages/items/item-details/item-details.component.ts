import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  isPdfViewerVisible = false;
  pdfSrc = 'path/to/your/pdf.pdf'; // Update with the path to your PDF file

  togglePdfViewer() {
    this.isPdfViewerVisible = !this.isPdfViewerVisible;
  }
}

import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MaterialModule, CommonModule, PdfViewerComponent, TableComponent],
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

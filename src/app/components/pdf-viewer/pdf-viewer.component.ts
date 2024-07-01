import { Component, input } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss'
})
export class PdfViewerComponent {
  pdfSrc: string = "https://drive.google.com/file/d/1GOwnm22FpEUgSOIhVxvdVN9akb6_DaKB/view?usp=sharing"; // Path to your PDF file

}

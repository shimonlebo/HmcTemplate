import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { TableComponent } from '../../components/table/table.component';

interface Option {
  id: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatToolbarModule, 
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    PdfViewerComponent, 
    TableComponent,
  ],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  isOpen = false;
  isPdfViewerVisible = false;
  options: Option[] = [
    { id: 'option1', name: 'Option 1', selected: false },
    { id: 'option2', name: 'Option 2', selected: false },
    { id: 'option3', name: 'Option 3', selected: false },
  ];

  togglePdfViewer() {
    this.isPdfViewerVisible = !this.isPdfViewerVisible;
  }

  onCheckboxChange1(option: Option, checked: boolean) {
    option.selected = checked;
    console.log(`${option.name} is now ${checked ? 'selected' : 'unselected'}`);
  }

  onCheckboxChange(option: Option) {
    console.log(`${option.name} is now ${option.selected ? 'selected' : 'unselected'}`);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

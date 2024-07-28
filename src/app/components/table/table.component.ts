import { ChangeDetectionStrategy, Component, EventEmitter, input, output, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TableHeaderComponent } from './table-header/table-header.component';
import { CustomSelectComponent } from '../custom-select/custom-select.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    TableHeaderComponent,
    CustomSelectComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  responsive = input<boolean>();
  maxTableHeight = input<string>();
  addFilter = true;
  showFooter = input<boolean>(false);
  
  onSelectionChange(value: any) {
    console.log('Selected value:', value);
  }
}

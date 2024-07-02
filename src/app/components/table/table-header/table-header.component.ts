import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  headerText = input<string>();
  addFilter = input<boolean>();
  addSort = input<boolean>();
  filterClicked = output();
  isOpen = false;
  isSorted = false;
  sortUp = false;

  onFilterClick() {
    this.isOpen = !this.isOpen;
    this.filterClicked.emit();
  }

  onSortClick() {
    this.sortUp = !this.sortUp;
  }
}

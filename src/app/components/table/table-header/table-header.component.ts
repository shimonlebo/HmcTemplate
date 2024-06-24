import { Component, EventEmitter, input, output, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  headerText = input<string>();
  addFilter = input<boolean>();
}

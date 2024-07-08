import { Component, EventEmitter, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-select-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, OverlayModule],
  templateUrl: './select-search.component.html',
  styleUrl: './select-search.component.scss'
})
export class SelectSearchComponent implements OnInit {
  items = input<any[]>([]);
  itemSelected = output<EventEmitter<any>>();
  isOpen = false;
  selectedItem: string | null = null;
  searchTerm = '';
  filteredItems: any[] = [];

  ngOnInit() {
    this.filteredItems = this.items();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: any) {
    this.selectedItem = item.name;
    this.itemSelected.emit(item);
    this.isOpen = false;
  }

  filterItems() {
    this.filteredItems = this.items().filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (item.subItems && item.subItems.some((subItem: any) => 
        subItem.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ))
    );
  }
}

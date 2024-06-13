import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule
  ],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {
  companies: string[] = [
    'Apple Inc.',
    'Google LLC',
    'Microsoft Corporation'
  ];
  isOpened: boolean = false;
  companyName: string = 'HMC Help';
  searchQuery: string = '';
  filteredItems: string[] = [...this.companies];

  filterList() {
    if (!this.searchQuery) {
      this.filteredItems = [...this.companies];
    } else {
      this.filteredItems = this.companies.filter(comp =>
        comp.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onSelect(comp: string) {
    this.companyName = comp;
  }
}

import { Component, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchListComponent } from './search-list/search-list.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { SelectSearchComponent } from '../select-search/select-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SearchListComponent,
    NavItemsComponent,
    AsyncPipe,
    RouterModule,
    SelectSearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showSidenav = output();
  companies = [
    { name: 'Advanced Nursing Home', subItems: [] },
    { name: 'Allay Healthcare', subItems: [] },
    { name: 'Barrow Healthcare', subItems: [] },
    { name: 'Batesville Healthcare', subItems: [] },
    { name: 'Boca Del Mar', subItems: [] },
    { name: 'Brinkley Healthcare', subItems: [] },
    { 
      name: 'Google Inc', 
      subItems: [
        { name: 'Drive', subItems: [] },
        { name: 'Gmail', subItems: [] }
      ]
    }
  ];
  
  onItemSelected(item: any) {
    console.log('Selected item:', item);
  }

  onToggleNavView() {
    this.showSidenav.emit();
  }

}

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {
  isOpened: boolean = false;
  companyName = 'Test Company';
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu';

interface Food {
  value: string;
  viewValue: string;
}
 
@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [
    MatIconModule, 
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {
  isOpened: boolean = false;
  companyName = 'Test Company';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

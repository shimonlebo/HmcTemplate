import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    MatAccordion,
    MatCardModule,
    MatExpansionModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  companyName: string = '';
  showAllComps: boolean = false;
  loadData: boolean = false;
}

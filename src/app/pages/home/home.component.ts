import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    MatAccordion,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  companyName: string = 'Test Company';
  showAllComps: boolean = false;
  loadData: boolean = false;
  panelOpenState = false;
}

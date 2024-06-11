import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 
import {MatDividerModule} from '@angular/material/divider'; 

interface Bill {
  vendor: string;
  billNumber: string;
  status: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatAccordion,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = ['vendor', 'billNumber', 'status'];
  bills: Bill[] = [
    { vendor: 'Clearview Digital', billNumber: '#8939', status: 'DENIED' },
    { vendor: 'Suddenlink 1129...', billNumber: '#', status: 'PENDING' },
    { vendor: 'Z&D Medical Se...', billNumber: '#VI-001849', status: 'PENDING' },
    { vendor: 'Z&D Medical Se...', billNumber: '#VI-001849', status: 'PENDING' },
  ];
  companyName: string = 'Test Company';
  showAllComps: boolean = false;
  loadData: boolean = false;
  panelOpenState = false;
}

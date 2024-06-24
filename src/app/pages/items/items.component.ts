import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatChipsModule} from '@angular/material/chips';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatTooltipModule,
    MatChipsModule,
    TableComponent
  ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

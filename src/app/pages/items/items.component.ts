import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

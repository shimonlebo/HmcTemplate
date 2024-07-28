import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [OverlayModule, MatIconModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent {
  isOpen = false;

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}

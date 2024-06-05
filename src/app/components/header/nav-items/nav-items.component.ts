import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {
  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  closeMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  }
}

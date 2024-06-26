import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'details', component: ItemDetailsComponent },
];

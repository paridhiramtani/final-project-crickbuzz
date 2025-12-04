import { Routes } from '@angular/router';
import { PointTableComponent } from './components/point-table/point-table.component';

export const routes: Routes = [
  { path: 'point-table', component: PointTableComponent },
  { path: '', redirectTo: '/point-table', pathMatch: 'full' }
];
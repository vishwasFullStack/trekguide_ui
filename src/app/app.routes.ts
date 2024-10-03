import { Routes } from '@angular/router';
import { DetailsComponent } from './Copmo/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Details-Page', pathMatch: 'full' },  // Set default path to Details-Page
  { path: 'Details-Page', component: DetailsComponent }
  // other routes here...

];

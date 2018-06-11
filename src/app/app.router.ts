import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'users'},
  { path: 'users', loadChildren: './components/movie/movie.module#MovieModule' } 
  
];


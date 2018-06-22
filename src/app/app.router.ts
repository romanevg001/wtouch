import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'quiz'},
  { path: 'movies', loadChildren: './components/movie/movie.module#MovieModule' }, 
  { path: 'quiz', loadChildren: './components/quiz/quiz.module#QuizModule' } 
  
];


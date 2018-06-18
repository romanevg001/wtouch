import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieListComponent
    },
    {
        path: ':id',
        component: MovieComponent
    },
    {
        path: 'user',
        component: UsersComponent
    },
    {
        path: 'user/:id',
        component: UsersComponent
    }
    
];


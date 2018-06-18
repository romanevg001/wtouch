import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './movie.router';
import { ShareModule } from '../share/share.module';
import { MovieService } from './movie.services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { MovieEffects } from './movie.effect';
import { UsersComponent } from './users/users.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    UsersComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MovieEffects]),
  ],
  entryComponents: [
    AddMovieComponent
  ],
  exports: [RouterModule],  
  bootstrap: [
    MovieListComponent
  ],
  providers:[MovieService]
  
})
export class MovieModule {}


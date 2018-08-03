import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './movie.router';
import { MovieService } from './movie.services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { MovieEffects } from './movie.effect';
import { UsersComponent } from './users/users.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';
//import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ShareModule }       from '../../share/share.module';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [
    UsersComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieComponent,
    EditMovieComponent,
    MovieItemComponent
    //SearchMovieComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MovieEffects]),
    ShareModule
  ],
  entryComponents: [
    AddMovieComponent
  ],
  exports: [RouterModule],  
  bootstrap: [
    MovieListComponent
  ],
  providers:[{provide: MovieService, useClass: MovieService}]
  
})
export class MovieModule {}


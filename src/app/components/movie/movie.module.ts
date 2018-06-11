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

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MovieEffects]),
  ],
  exports: [RouterModule],  
  bootstrap: [
    UsersComponent
  ],
  providers:[MovieService]
  
})
export class MovieModule {}


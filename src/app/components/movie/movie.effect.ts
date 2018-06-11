import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';
import * as MovieActions from './movie.actions';
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';
import {MovieService} from './movie.services';

@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private _movieService:MovieService
    ) {}
    
    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
      ofType(MovieActions.MovieActionTypes.LOAD),
      switchMap(() => {
        return this._movieService.getMovieList('hk').pipe(
            map(list => {
                return new MovieActions.LoadSuccess(list)
            }),
            catchError(err=> of(new MovieActions.LoadFail(err)))
        )

      })
    )
    
    @Effect()
    editMovie$: Observable<Action> = this.actions$.pipe(
      ofType(MovieActions.MovieActionTypes.LOAD_ITEM),
      map((action: any) => action.payload),
      mergeMap((id) => {
          console.log('id',id)
        return this._movieService.editMovie(id).pipe(
            map(item => {
                return new MovieActions.LoadItemSuccess(item)
            }),
            catchError(err=> of(new MovieActions.LoadItemFail(err)))
        )
      })
    )

}
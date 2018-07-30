import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as MovieActions from './movie.actions';

import {MovieService} from './movie.services';


@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private _movieService:MovieService
    ) {

        console.log(' this.actions$', this.actions$, typeof  this.actions$)
     
    }
    
    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
        map((action: any) => {console.log(action); return action}),
      ofType(MovieActions.MovieActionTypes.LOAD),
      map((action: any) => action.payload),
      mergeMap((searchmovie) => {
          console.log('searchmovie',searchmovie)
        return this._movieService.getMovieList(searchmovie).pipe(
            map(list =>  new MovieActions.LoadSuccess(list)),
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

    @Effect()
    addMovie$: Observable<Action> = this.actions$.pipe(
      ofType(MovieActions.MovieActionTypes.ADD),
      map((action: any) => action.payload),
      mergeMap((data) => {
        return this._movieService.addMovie(data).pipe(
            map(item => {
                console.log(item)
                return new MovieActions.AddSuccess(item)
            }),
            catchError(err=> of(new MovieActions.AddFail(err)))
        )
      })
    )

    @Effect()
    deleteMovie$: Observable<Action> = this.actions$.pipe(
      ofType(MovieActions.MovieActionTypes.REMOVE),
      map((action: any) => action.payload),
      mergeMap((id) => {
        return this._movieService.deleteMovie(id).pipe(
            map(item => {
                return new MovieActions.RemoveSuccess(id)
            }),
            catchError(err=> of(new MovieActions.RemoveFail(err)))
        )
      })
    )

}
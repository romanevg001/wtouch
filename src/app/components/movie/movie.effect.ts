import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';
import * as MovieActions from './movie.actions';
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';
import {MovieService} from './movie.services';
import { select, Store } from '@ngrx/store';

@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private _movieService:MovieService
    ) {}
    
    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
      ofType(MovieActions.MovieActionTypes.LOAD),
      map((action: any) => action.payload),
      mergeMap((searchmovie) => {
        return this._movieService.getMovieList(searchmovie).pipe(
            map(list => {
                console.log(list)
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
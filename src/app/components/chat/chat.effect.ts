/* import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ChatActions from './chat.actions';

import {ThreadsService} from './chat.services';


@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions,
        private _threadsService:ThreadsService
    ) {

    }
    
    @Effect()
    loadUserThread$: Observable<Action> = this.actions$.pipe(
      ofType(ChatActions.ChatActionTypes.LOAD_USER_THREAD),
      map((action: any) => action.payload),
      mergeMap((searchmovie) => {
          console.log('searchmovie',searchmovie)
        return this._threadsService.loadUserTreads()
         .pipe(
            map(list =>  new ChatActions.LoadSuccess(list)),
            catchError(err=> of(new MovieActions.LoadFail(err)))
        )

      })
    )
    
} */
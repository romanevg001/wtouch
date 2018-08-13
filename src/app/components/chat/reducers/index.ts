 import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
 /* import * as fromMovieList from './movie-list';
  import * as fromMovie from './movie';
  import * as fromRoot from '../../../app.reducer';

  export interface MoviesState {
    movieList: fromMovieList.State;
    movieItems: fromMovie.State;
    participants: {[key:number]:Participant};
    threads: {[key:number]: Thread};
    messages: {[key:number]:Message};
  }
  
  export interface State extends fromRoot.State {
    chat: MoviesState;
  }
  
  export const reducers: ActionReducerMap<MoviesState> = {
    movieList: fromMovieList.reducer,
    movieItems: fromMovie.reducer
  };

  export const getMoviesState = createFeatureSelector<MoviesState>('chat');
  export const getMovieListState = createSelector(getMoviesState, state => state.movieList);
  export const getMovieState = createSelector(getMoviesState, state => state.movieItems);

  export const getMovieList = createSelector(getMovieListState, state => state.data);
  export const getMovie = createSelector(getMovieState, state => state.data);
   */

  export const reducers: ActionReducerMap<any> = {
    
  };
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromMovieList from './movie-list';
  import * as fromMovie from './movie';
  import * as fromRoot from '../../../app.reducer';

  export interface MoviesState {
    movieList: fromMovieList.State;
    movie: fromMovie.State;
  }
  
  export interface State extends fromRoot.State {
    movies: MoviesState;
  }
  
  export const reducers: ActionReducerMap<MoviesState> = {
    movieList: fromMovieList.reducer,
    movie: fromMovie.reducer
  };

  export const getMoviesState = createFeatureSelector<MoviesState>('movies');
  export const getMovieListState = createSelector(getMoviesState, state => state.movieList);
  export const getMovieState = createSelector(getMoviesState, state => state.movie);

  export const getMovieList = createSelector(getMovieListState, state => state.data);
  export const getMovie = createSelector(getMovieState, state => state.data);
  
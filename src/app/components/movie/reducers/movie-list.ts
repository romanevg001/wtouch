import { Action, createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import {MovieActionTypes, MovieActionsUnion} from '../movie.actions';
  
export interface State {
    loaded: boolean;
    loading: boolean;
    data: string[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    data: [],
};

export function reducer(state = initialState,action: MovieActionsUnion): State {
    switch (action.type) {

        case MovieActionTypes.LOAD: {
            return {
            ...state,
            loading: true,
            };
        }

        case MovieActionTypes.LOAD_SUCCESS: {
            return {
                ...state,
                loaded: true,
                data: action.payload
            };
        }
        
        default: {
            return state;
        }
    }
}


/* 
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getData = (state: State) => state.data;
   */


/* 
export interface MovieState {
    movieList: State;
}
export const reducers: ActionReducerMap<MovieState> = {
    movieList: MovieReducer
}; */
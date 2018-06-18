import { Action, createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import {MovieActionTypes, MovieActionsUnion} from '../movie.actions';
  
export interface State {
    loaded: boolean;
    loading: boolean;
    data: any[];
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

        case MovieActionTypes.REMOVE_SUCCESS: {
            let d = state.data.filter((item)=>item['id']!=action.payload);
            return {
                ...state,
                loaded: true,
                data: d
            };
        }

        case MovieActionTypes.ADD_SUCCESS: {
            let d = state.data.push(action.payload);
            return {
                ...state,
                loaded: true,
                data: d
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
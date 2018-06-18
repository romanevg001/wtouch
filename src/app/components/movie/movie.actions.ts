import { Action } from '@ngrx/store';
import { MovieItem } from './movie.models';

export enum MovieActionTypes {
    EDIT =      '[Movie] Edit',
    EDIT_SUCCESS =      '[Movie] Edit Success',
    EDIT_FAIL =      '[Movie] Edit Fail',
    REMOVE =    '[Movie] Remove',
    REMOVE_SUCCESS =    '[Movie] Remove Success',
    REMOVE_FAIL =    '[Movie] Remove Fail',
    ADD =       '[Movie] Add',
    ADD_SUCCESS =   '[Movie] Add Success',
    ADD_FAIL =      '[Movie] Add Fail',
    LOAD =      '[Movie] Load',
    LOAD_SUCCESS =      '[Movie] Load Success',
    LOAD_FAIL =      '[Movie] Load Fail',
    LOAD_ITEM =      '[Movie] Load Item',
    LOAD_ITEM_SUCCESS =      '[Movie] Load Item Success',
    LOAD_ITEM_FAIL =      '[Movie] Load Item Fail'
}

export class Edit implements Action {
    readonly type = MovieActionTypes.EDIT;
    constructor(public payload: string) {}
}
export class EditSuccess implements Action {
    readonly type = MovieActionTypes.EDIT_SUCCESS;
    constructor(public payload: string) {}
}
export class EditFail implements Action {
    readonly type = MovieActionTypes.EDIT_FAIL;
    constructor(public payload: string) {}
}

export class Remove implements Action {
    readonly type = MovieActionTypes.REMOVE;
    constructor(public payload: any) {}
}
export class RemoveSuccess implements Action {
    readonly type = MovieActionTypes.REMOVE_SUCCESS;
    constructor(public payload: string) {}
}
export class RemoveFail implements Action {
    readonly type = MovieActionTypes.REMOVE_FAIL;
    constructor(public payload: string) {}
}

export class Add implements Action {
    readonly type = MovieActionTypes.ADD;
    constructor(public payload: MovieItem) {}
}
export class AddSuccess implements Action {
    readonly type = MovieActionTypes.ADD_SUCCESS;
    constructor(public payload: MovieItem[]) {}
}
export class AddFail implements Action {
    readonly type = MovieActionTypes.ADD_FAIL;
    constructor(public payload: string) {}
}

export class Load implements Action {
    readonly type = MovieActionTypes.LOAD;
    constructor(public payload: string) {}
}
export class LoadSuccess implements Action {
    readonly type = MovieActionTypes.LOAD_SUCCESS;
    constructor(public payload: MovieItem[]) {}
}
export class LoadFail implements Action {
    readonly type = MovieActionTypes.LOAD_FAIL;
    constructor(public payload: any[]) {}
}

export class LoadItem implements Action {
    readonly type = MovieActionTypes.LOAD_ITEM;
    constructor(public payload: any) {}    
}
export class LoadItemSuccess implements Action {
    readonly type = MovieActionTypes.LOAD_ITEM_SUCCESS;
    constructor(public payload: any) {}
}
export class LoadItemFail implements Action {
    readonly type = MovieActionTypes.LOAD_ITEM_FAIL;
    constructor(public payload: any[]) {}
}

export type MovieActionsUnion =
  | Edit
  | EditSuccess
  | EditFail
  | Add
  | AddSuccess
  | AddFail
  | Remove
  | RemoveSuccess
  | RemoveFail
  | Load
  | LoadSuccess
  | LoadFail
  | LoadItem
  | LoadItemSuccess
  | LoadItemFail;
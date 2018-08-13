import { Action } from '@ngrx/store';
import { AllUserData } from '../../share/to/all-user-data.model';


export enum ChatActionTypes {
 
    LOAD_USER_THREAD =      '[Chat] Load user thread',
}

export class LoadUserThread implements Action {
    readonly type = ChatActionTypes.LOAD_USER_THREAD;
    constructor(public payload: AllUserData) {}
}

export type ChatActionsUnion =
  | LoadUserThread;
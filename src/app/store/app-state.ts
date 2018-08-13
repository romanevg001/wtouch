import { UiState, INITIAL_UI_STATE } from "./ui-state";
import { StoreData, INITIAL_STORE_DATE } from "./store-data";

export interface AppState {
    uiState: UiState,
    storeDate : StoreData
}

export const INITIAL_APP_STATE: AppState = {
    uiState: INITIAL_UI_STATE,
    storeDate : INITIAL_STORE_DATE
}
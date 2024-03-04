import { produce } from "immer";

export interface IAppState {
  isLoading: boolean;
}

export enum ACTIONS {
  LOAD_STATE = "LOAD_STATE",
  SET_LOADING = "SET_LOADING",
}

export type IAppActions =
  | { type: ACTIONS.SET_LOADING; payload: boolean }
  | { type: ACTIONS.LOAD_STATE; payload: IAppState };

export const initialAppState: IAppState = {
  isLoading: true,
};

export default function appContextReducer(
  state: IAppState,
  action: IAppActions
) {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case ACTIONS.SET_LOADING: {
        draft.isLoading = action.payload;
        break;
      }
      case ACTIONS.LOAD_STATE: {
        return action.payload;
      }
    }
    return draft;
  });
}

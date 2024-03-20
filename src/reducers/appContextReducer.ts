import { produce } from "immer";

export interface IAppState {
  is_loading: boolean;
  height: number;
}

export enum ACTIONS {
  LOAD_STATE = "LOAD_STATE",
  SET_LOADING = "SET_LOADING",
  SET_HEIGHT = "SET_HEIGHT",
}

export type IAppActions =
  | { type: ACTIONS.SET_LOADING; payload: boolean }
  | { type: ACTIONS.LOAD_STATE; payload: IAppState }
  | { type: ACTIONS.SET_HEIGHT; payload: number };

export const initialAppState: IAppState = {
  is_loading: true,
  height: 0,
};

export default function appContextReducer(
  state: IAppState,
  action: IAppActions
) {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case ACTIONS.SET_LOADING: {
        draft.is_loading = action.payload;
        break;
      }
      case ACTIONS.LOAD_STATE: {
        return action.payload;
      }
      case ACTIONS.SET_HEIGHT: {
        draft.height = action.payload;
      }
    }
    return draft;
  });
}

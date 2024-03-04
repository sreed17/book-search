import { produce } from "immer";

export interface IThemeState {
  colorScheme: "light" | "dark";
}

export type IColorScheme = IThemeState["colorScheme"];

export enum ACTIONS {
  SET_COLOR_SCHEME = "SET_COLOR_SCHEME",
  LOAD_STATE = "LOAD_STATE",
}

export type IThemeActions =
  | {
      type: ACTIONS.SET_COLOR_SCHEME;
      payload: IColorScheme;
    }
  | {
      type: ACTIONS.LOAD_STATE;
      payload: IThemeState;
    };

export const initialThemeState: IThemeState = {
  colorScheme: matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export default function themeContextReducer(
  state: IThemeState,
  action: IThemeActions
) {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case ACTIONS.SET_COLOR_SCHEME: {
        draft.colorScheme = action.payload;
        break;
      }
      case ACTIONS.LOAD_STATE: {
        return action.payload;
      }
    }
    return draft;
  });
}

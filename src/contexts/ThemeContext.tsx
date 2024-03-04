import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
} from "react";
import themeContextReducer, {
  ACTIONS as THEME_ACTIONS,
  IColorScheme,
  IThemeActions,
  IThemeState,
  initialThemeState,
} from "../reducers/themeContextReducer";
import { getRecord, saveRecord } from "../utils/storage";
import { THEME_KEY } from "../constants/storeKeys";
import { renderTheme } from "../services/ThemeService";

export interface IThemeContext {
  state: IThemeState;
  setColorScheme: (colorScheme: IColorScheme) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

/** ==========================
 *  PROVIDER
 * ===========================
 */

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(themeContextReducer, initialThemeState);

  // component on mount, check theme state exists localstorage then load it
  useEffect(() => {
    const savedRecord = getRecord(THEME_KEY);
    if (savedRecord) {
      dispatch({ type: THEME_ACTIONS.LOAD_STATE, payload: savedRecord });
    }
  }, []);

  // sideeffect on colorScheme changes - save the theme state
  useEffect(() => {
    saveRecord(THEME_KEY, state);
    renderTheme(state.colorScheme);
  }, [state.colorScheme]);

  // Prepare the context value
  const value: IThemeContext = {
    state,
    setColorScheme: (colorScheme: IColorScheme) => {
      dispatch({
        type: THEME_ACTIONS.SET_COLOR_SCHEME,
        payload: colorScheme,
      } as IThemeActions);
    },
  };

  // Render
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

import { FC, PropsWithChildren, createContext, useReducer } from "react";
import appContextReducer, {
  ACTIONS as APP_ACTIONS,
  IAppState,
  initialAppState,
} from "../reducers/appContextReducer";

export interface IAppContext {
  state: IAppState;
  setLoading: (flag: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

/** ==========================
 *  PROVIDER
 * ===========================
 */

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialAppState);
  const value: IAppContext = {
    state,
    setLoading: (flag: boolean) => {
      dispatch({ type: APP_ACTIONS.SET_LOADING, payload: flag });
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

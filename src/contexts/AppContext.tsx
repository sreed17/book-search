import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
} from "react";
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

  useEffect(() => {
    const setRootHeight = (height: number) => {
      const rootElem = document.getElementById("root");
      if (!rootElem) return;
      rootElem.style.height = `${height}px`;
    };

    const handleWindowResize = (_: UIEvent) => {
      const height = window.innerHeight;
      dispatch({ type: APP_ACTIONS.SET_HEIGHT, payload: height });
      setRootHeight(height);
    };

    setRootHeight(window.innerHeight);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const value: IAppContext = {
    state,
    setLoading: (flag: boolean) => {
      dispatch({ type: APP_ACTIONS.SET_LOADING, payload: flag });
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

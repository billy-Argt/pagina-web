// import stepsList from "@/utils/stepsList";
import { createStore } from "react-simple-hook-store";
// import functions from 'v-functions'


// const decodedStorage = functions.getDecodeStorage('usuarioPermisos');
// const initialPermisos = decodedStorage ? JSON.parse(decodedStorage) : null;
interface IState {
  title: string;
  usuarioPermisos: object | null;
  sessionInactive: boolean;
  failFetch: boolean;
}
interface IActions {
  setTitle: (newState: string) => void;
  setUsuarioPermisos: (newState: object | null) => void;
  setSessionInactive: (newState: boolean) => void;
  setFailFetch: (newState: boolean) => void;
}

export const { useStore, store } = createStore<IState, IActions>(
  {
    title: '',
    usuarioPermisos: null,
    sessionInactive: true,
    failFetch: false,
  },
  {
    setTitle: (store, newState) => {
      store.setState({
        title: newState
      });
    },
    setUsuarioPermisos: (store, newState) => {
      store.setState({
        usuarioPermisos: newState
      });
      // functions.setEncodeStorage('usuarioPermisos', JSON.stringify(newState));
    },
    setSessionInactive: (store, newState) => {
      store.setState({
        sessionInactive: newState
      });
    },
    setFailFetch: (store, newState) => {
      store.setState({
        failFetch: newState
      });
    },
  }
);

// import logo from './logo.svg';


import './fontawesome';

import { Provider } from "react-redux";
import { persistor, store } from "./store";

import { PersistGate } from 'redux-persist/integration/react';
import { Routers } from './components/Routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
}

export default App;

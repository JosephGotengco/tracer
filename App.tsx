import React, { Component } from "react";
import TracerApp from "./src/TracerApp";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TracerApp />
        </PersistGate>
      </Provider>
    );
  }
}

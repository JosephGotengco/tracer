// Imports: Dependencies
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
// Imports: Redux
import rootReducer from "../reducers";
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["expenseReducer"]
  // Blacklist (Don't Save Specific Reducers)
  //   blacklist: ["counterReducer"]
};

const middleware = [thunk];
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
persistor.purge();
// Exports
export { store, persistor };

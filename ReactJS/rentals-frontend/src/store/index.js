import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
let store;
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export function configureStore() {
  store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return { store, persistor };
}

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-community/async-storage";
let store;
const persistConfig = {
  key: "persistedReducer",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export function configureStore() {
  store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
}

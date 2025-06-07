import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import authReducer from "./auth/slice";
// import booksReducer from "./books/slice";
// import libraryReducer from "./library/slice";
// import readingReducer from "./reading/slice";
import nearestStoresReducer from "./stores/slice";

// const persistAuthConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(persistAuthConfig, authReducer),
    nearestStores: nearestStoresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/slice";
import storesReducer from "./stores/slice";
import reviewsReducer from "./reviews/slice";
import productsReducer from "./products/slice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    stores: storesReducer,
    reviews: reviewsReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

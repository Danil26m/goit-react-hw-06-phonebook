import { configureStore} from "@reduxjs/toolkit";
import {contacts} from './contacts'
import {filter} from './filter'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
}
const persistReduser = persistReducer(persistConfig, contacts.reducer);
export const store = configureStore({
    reducer:{
        contacts: persistReduser,
        filter: filter.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
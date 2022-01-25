import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from '../services/Api';
import { cryptoNewApi } from "../services/NewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewApi.reducerPath]: cryptoNewApi.reducer,
  },
});
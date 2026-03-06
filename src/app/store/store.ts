import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "../../shared/api/baseApi"
import { productsPageReducer } from "../../pages/ProductsPage/model/productsPageSlice"

export const store = configureStore({
  reducer: {
    productsPage: productsPageReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

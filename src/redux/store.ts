import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import productSlice from "./features/product/productSlice";
const store = configureStore({
  reducer: {
    products: productSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;

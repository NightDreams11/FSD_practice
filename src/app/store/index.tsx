import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "../saga"
import { mainSlice } from "./main"

let sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { mainStore: mainSlice.reducer },
  middleware: [sagaMiddleware],
  devTools: true,
})
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

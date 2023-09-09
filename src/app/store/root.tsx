import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit"
import { rootSaga } from "../saga"
import { userSlice } from "../../enteties/user"

let sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { mainStore: userSlice.reducer },
  middleware: [sagaMiddleware],
  devTools: true,
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

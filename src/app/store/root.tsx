import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "../../enteties/user/model/userSlice"
import { rootSaga } from "../../shared/model/saga"

let sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { mainStore: userSlice.reducer },
  middleware: [sagaMiddleware],
  devTools: true,
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

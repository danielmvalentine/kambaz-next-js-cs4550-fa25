import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/[id]/reducer";
import modulesReducer from "./Courses/[id]/Modules/reducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
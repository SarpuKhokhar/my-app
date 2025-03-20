import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducers";

export default configureStore({
  reducer: {
    appStoredData: appReducer,
  },
});

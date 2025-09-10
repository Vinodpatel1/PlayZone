import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appslice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    chat:chatReducer,
  },
});
export default store;
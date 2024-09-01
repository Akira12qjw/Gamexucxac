import { configureStore } from "@reduxjs/toolkit";
import BtXucXacReducer from "./BTXucXacReducer";

export default configureStore({
  reducer: {
    BtXucXacReducer,
  },
});

import { combineReducers } from "redux";

import BtXucXacReducer from "./BTXucXacReducer";

const rootReducer = combineReducers({
  //store tổng của ứng dụng
  BtXucXacReducer, //state BaiTapGame
});

export default rootReducer;

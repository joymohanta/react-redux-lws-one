import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicHookCounterReducer from "./dynamicHookCounter/dynamicHookCounterReducer";

const rootReducer = combineReducers({
  hookCounter: counterReducer,
  dynamicCounter: dynamicHookCounterReducer,
});

export default rootReducer;

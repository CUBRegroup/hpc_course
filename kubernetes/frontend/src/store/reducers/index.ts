import { combineReducers } from "redux";
import taskReducer from "./tasks.reducer";
import authReducer from "./auth.reducer";

const reducers = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

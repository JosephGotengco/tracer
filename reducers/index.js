// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import expenseReducer from "./expenseReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  expenseReducer: expenseReducer
});
// Exports
export default rootReducer;

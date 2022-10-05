// function to combine all the reducers since a redux store can take only one reducer as argument
import { combineReducers } from "redux";

// reducers
import gamesReducer from "./gamesReducer";
import gameDetailsReducer from "./gameDetailsReducer";

const rootReducer = combineReducers({
  gamesReducer,
  gameDetailsReducer,
});

export default rootReducer;

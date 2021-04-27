import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import searchReducer from "../reducers/search";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: null,
  search: "",
};

const allReducers = combineReducers({
  user: userReducer,
  search: searchReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}

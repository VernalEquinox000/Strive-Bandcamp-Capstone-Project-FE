import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: null,
};

const allReducers = combineReducers({
  user: userReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}

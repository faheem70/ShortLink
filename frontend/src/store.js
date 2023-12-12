import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';  // Import 'thunk' correctly
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
});

// Initialize the initialState with default values
let initialState = {
    user: {
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
    },
};

// Use 'thunk' without trying to import it as 'default'
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

export default store;

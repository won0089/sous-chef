import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};

export default function configureStore(state = initialState) {
    return createStore(
        rootReducer,
        state,
        composeWithDevTools(applyMiddleware(thunk))
    );
}

export { initialState };

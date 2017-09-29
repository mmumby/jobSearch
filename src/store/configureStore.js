import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist'
import rootReducer from '../reducers';
import logger from 'redux-logger';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(thunk, logger),
          autoRehydrate(),
        )
    );
}
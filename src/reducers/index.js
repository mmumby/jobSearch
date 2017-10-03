import { combineReducers } from 'redux';
import { jobs, searchHasErrored, searchIsLoading } from './jobReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
    jobs,
    searchHasErrored,
    searchIsLoading,
    routing: routerReducer
});

export default rootReducer;
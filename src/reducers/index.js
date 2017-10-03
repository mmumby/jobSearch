import { combineReducers } from 'redux';
import { jobs, searchHasErrored, searchIsLoading, skills } from './jobReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
    skills,
    jobs,
    searchHasErrored,
    searchIsLoading,
    routing: routerReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import { jobs, searchJobs } from './feedReducer';

export default combineReducers({
    jobs,
    searchJobs,
});
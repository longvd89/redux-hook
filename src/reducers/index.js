/**
 * Created by vulong on 24/10/2019.
 */
import { combineReducers } from 'redux';
import githubReducer from './githubReducer';
import countReducer from './countReducer';

export default combineReducers({
    githubReducer: githubReducer,
    counter: countReducer
});
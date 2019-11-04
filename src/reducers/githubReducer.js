/**
 * Created by vulong on 24/10/2019.
 */
import { FETCH_GITHUB_DATA } from '../actions/type';

export default function githubReducer(state = [], action) {
    switch (action.type) {
        case FETCH_GITHUB_DATA:
            return action.data;
        default:
            return state;
    }
}
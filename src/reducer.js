/**
 * Created by vulong on 24/10/2019.
 */
function countReducer(state = { num: 10 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                num: state.num + action.step
            };
        case "DECREMENT":
            return {
                ...state,
                num: state.num - action.step
            };
        default:
            return state;
    }
}

export default countReducer;
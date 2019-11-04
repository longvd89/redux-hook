/**
 * Created by vulong on 25/10/2019.
 */
import React from 'react';
import {useSelector , useDispatch} from 'react-redux';

function Counter () {
    const counter = useSelector(state => state.counter);
    console.info('COUNTER: ',counter);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Hello counter : {counter.num}</h1>
            <button
                onClick={() =>
                    dispatch({
                        type: "INCREMENT",
                        step: 1
                    })
                }
            >Increment</button>
            <button
                onClick={() =>
                    dispatch({
                        type: "DECREMENT",
                        step: 1
                    })
                }
            >Decrement</button>
        </div>
    )
}
export default Counter;
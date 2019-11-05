/**
 * Created by vulong on 25/10/2019.
 */
import React from 'react';
import StyledComponent from "./StyledComponent";
import styled from "styled-components";
import {useSelector , useDispatch} from 'react-redux';

const Button = styled.button`
  color: white;
  background:#607d8b
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid;
  border-radius: 14px;
  
  &:hover {
   box-shadow: 0 5px 5px rgba(17, 16, 62, 0.15);
}

&:focus {
   background: rgb(104, 173, 226);
   color: white;
   border: 1px solid;
   border-radius: 14px;
   outline:none;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function Counter () {
    const counter = useSelector(state => state.counter);
    console.info('COUNTER: ',counter);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Hello counter : {counter.num}</h1>
            <StyledComponent>Hello I am styled : {counter.num}</StyledComponent>
            <Button
                onClick={() =>
                    dispatch({
                        type: "INCREMENT",
                        step: 1
                    })
                }
            >Increment</Button>
            <TomatoButton
                onClick={() =>
                    dispatch({
                        type: "DECREMENT",
                        step: 1
                    })
                }
            >Decrement</TomatoButton>
        </div>
    )
}
export default Counter;
import React, {useReducer } from 'react'
// import "./styleIncr.css";
import { IncrStyle } from './style';

const reducer = (state, action) => {
  if(state > 0 && action.type == "Decr"){
    state = state - 1;
  }
  if(action.type == "Incr"){
    state = state + 1;
  }
return state;
}
const IncrDecrUseReducer = () => {
  let initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
      <IncrStyle>
        <div className="center_div">
          <p>{state}</p>
          <div class="button2" onClick={()=>dispatch({type: "Decr"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
          <div class="button2" onClick={()=>dispatch({type: "Incr"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
        </div>
      </IncrStyle>
    </>
  )
}

export default IncrDecrUseReducer
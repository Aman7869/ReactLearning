import React from 'react'
import "./style.css";

const IncrDecr = () => {
  return (
    <>
      <div className="center_div">
        <p>{0}</p>
        <div class="button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  )
}

export default IncrDecr
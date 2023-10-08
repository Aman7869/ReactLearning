import React from 'react'
import Restaurant from './component/Basics/Restaurant'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncrDecr from './component/IncrDecr/IncrDecrUseReducer';
import IncrDecrUseState from './component/IncrDecr/IncrDecrUseState';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/todo-list" element={<IncrDecr />} />
        <Route path="/todo-state" element={<IncrDecrUseState />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
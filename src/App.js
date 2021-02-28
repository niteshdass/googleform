import React from 'react'
import Create from './Create'
import Form from './Form'
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Route path="/" exact component={Create} />
          <Route path="/form"  exact component={Form} />
    
      </BrowserRouter>
       
    </div>
  )
}

export default App


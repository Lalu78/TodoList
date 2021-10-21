import React from 'react'
import Counter from "./Counter";
import Todolist from "./Todolist";
import Form from "./Form"
import Input from "./Input";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showinput from './Showinput';

function App() {
  return (
    <div>
      
      
      <Todolist/>
      
      
      
      
      
      
      {/* <Router>
        <Navbar />
        <Switch>
     
          <Route path="/input">
          <Input/>
          </Route>
          <Route path="/showinput" component={Showinput}>
         
        </Route>
        </Switch>
    
      </Router> */}
    
    </div>
  )
}

export default App

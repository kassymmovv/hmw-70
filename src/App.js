import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Header/>
           <Switch>
               <Route path="/shows/:id" exact  component={Main}/>
           </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;

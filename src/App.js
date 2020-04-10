import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import {Detail} from './Pages/Details'
import {Home} from './Pages/Home'

class App extends Component {

  render(){
    const url = new URL(document.location)
    const Page = url.searchParams.has("id")
    ?<Detail id = {url.searchParams.get("id")}/>
    :<Home/>

    return (
      <div className="App">
        {Page}
      </div>
    );
  }
  
}

export default App;

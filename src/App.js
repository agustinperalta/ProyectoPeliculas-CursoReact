import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import {Title} from './Components/Title'
import {SearchForm} from './Components/SearchForm'
import {MoviesList} from './Components/MoviesList'


class App extends Component {
 state = {results:[]}
 
_handleResults = (results) =>{
  this.setState({results})
}

  render(){
    return (
      <div className="App">
        <Title>Buscar Peliculas</Title>
  
        <div className='searchForm-Wrapper'>
        <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.results.length === 0 
        ?<p>Sin Resultados</p>
        :<MoviesList movies={this.state.results}/>}
      </div>
    );
  }
  
}

export default App;

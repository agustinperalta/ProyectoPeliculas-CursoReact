import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import {Title} from './Components/Title'
import {SearchForm} from './Components/SearchForm'


class App extends Component {
 state = {results:[]}
 
_handleResults = (results) =>{
  this.setState({results})
}

_renderResults(){
  const {results} = this.state
  return results.map(movie =>
    {
    return <p key={movie.imdbID}>{movie.Title}</p>
    })

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
        :this._renderResults()} 
  
      </div>
    );
  }
  
}

export default App;

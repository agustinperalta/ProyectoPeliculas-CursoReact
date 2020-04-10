import React from 'react';
import './App.css';
import "bulma/css/bulma.css"
import {Title} from './Components/Title'
import {SearchForm} from './Components/SearchForm'


function App() {
  return (
    <div className="App">
      <Title>Buscar Peliculas</Title>

      <div className='searchForm-Wrapper'>
      <SearchForm/> 
      </div>

    </div>
  );
}

export default App;

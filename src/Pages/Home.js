import React, {Component} from 'react'
import {Title} from '../Components/Title'
import {SearchForm} from '../Components/SearchForm'
import {MoviesList} from '../Components/MoviesList'
export class Home extends Component{
    state = {results:[],userSearch:false}
 
    _handleResults = (results) =>{
      this.setState({results,userSearch:true})
    }
    _handleUseSearch(){
      return(
          this.state.results.length === 0 
          ?<p>Sin Resultados</p>
          :<MoviesList movies={this.state.results}/>
      )
    }
    
    render(){
        return(
            <div>
                <Title>Buscar Peliculas</Title>
  
                <div className='searchForm-Wrapper'>
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.userSearch
                ?this._handleUseSearch()
                :<small>Use el buscador para encontrar una pelicula</small>}
            </div>
        )
    }


}
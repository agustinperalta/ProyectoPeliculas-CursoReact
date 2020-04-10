import React, { Component } from 'react'

const API_KEY = '69170918'


export class SearchForm extends Component{

    state = {
        inputMovie: ''
    }

    _handleOnChange = (e) =>{
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) =>{
        e.preventDefault()
        const {inputMovie} = this.state

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(response =>{
                const {Search = [], totalResults = "0"} = response
                console.log({Search, totalResults })
                this.props.onResults(Search)
            })
    }


    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleOnChange}
                            type="text" 
                            placeholder="Buscar una película"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
            
        )
    }
}
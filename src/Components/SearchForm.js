import React, { Component } from 'react'

export class SearchForm extends Component{

    state = {
        inputMovie: ''
    }

    _handleOnChange = (e) =>{
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) =>{
        e.preventDefault()
        alert(this.state.inputMovie)
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
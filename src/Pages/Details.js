import React, { Component } from 'react'
import "./Detail.css"
import PropTypes from 'prop-types'
const API_KEY = '69170918'
export class Detail extends Component{
    static propTypes={
        id: PropTypes.string
    }

    state = {movie:{}}
    _fetchMovie({id}){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie =>{
           console.log({movie})
           this.setState({movie})
        })
    }

    _goBack(){
        window.history.back()
    }

    componentDidMount(){
        const {id} = this.props
        this._fetchMovie({id})
    }
    render(){
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return(
            <div>
                <div className="buttons">
                    <button onClick={this._goBack} className="button is-primary">Volver a Inicio</button>
                </div>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}
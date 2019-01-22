import React, { Component } from 'react'
import './Utisak.css'

export default class Utisak extends Component {

    state = {
        izabran: false
    }

    handleClick() {
        this.setState({
            izabran: !this.state.izabran
        })
    }

    render() {

        //const slika = this.props.korisnik.slika
        //const utisak = this.props.korisnik.utisak
        //const ime = this.props.korisnik.ime
        //ili

        const { slika, utisak, ime } = this.props.korisnik

        return (
            <div onClick={this.handleClick.bind(this)}>
                <img src={slika} className="user-img" alt={ime} />
                <blockquote>
                    <p>{utisak}</p>
                </blockquote>
                <cite className={this.state.izabran ? 'red' : ''}>- {ime}</cite>
            </div>
        )
    }
}

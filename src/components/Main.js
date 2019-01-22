import React, { Component } from 'react'
import Utisak from './Utisak'
import korisnici from '../data/korisnici.json'

export default class Main extends Component {

    state = {
        randomKorisnici: []
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(x => x.json())
            .then(x => this.setState({
                randomKorisnici: x.results
            }))
    }

    render() {
        console.log(this.state.randomKorisnici)

        // Mapirati randomKorisnici za HTML I prikazati ih

        const korisniciJsx = korisnici
            .map((x, i) => <Utisak key={i} korisnik={x} />

            )

        return (
            <main>
                <h3>Glupi main</h3>
                {korisniciJsx}
            </main >
        )
    }
}

//ili ovde export default Header
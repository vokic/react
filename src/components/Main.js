import React, { Component } from 'react'
const korisnici = [

    {
        ime: "Marija",
        utisak: "Sve ok"
    },
    {
        ime: "Darija",
        utisak: "Sve ok"
    },
    {
        ime: "Parija",
        utisak: "Sve ok"
    },

]


export default class Main extends Component {
    render() {

    

        const korisniciJsx = korisnici.map(x => <p>{x.ime}: {x.utisak}</p>)

        return (
            <header>
                <h2>Prokleti main</h2>
                {korisniciJsx}
            </header>
        )
    }
}

//ili ovde export default Header
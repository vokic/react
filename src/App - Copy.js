import React, { Component } from 'react';
import logo from './plazma.png';
import './App.css';

class App extends Component {
  render() {

const korisnici = [
  {ime: "Ana"},
  {ime: "Vana"},
  {ime: "Gana"}
];

const paragrafi = korisnici
.map(x => <p> {x.ime}</p>)


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Zagrizi <code>Plazmu</code> i uzivaj.
          </p>
          <a
            className="App-link"
            href="https://plazma.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naruci Plazmu.
          </a>
          {paragrafi}
        </header>
      </div>
    );
  }
}

export default App;

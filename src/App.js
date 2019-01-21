import React,{Component} from 'react'
import './App.css'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Header from './components/Header'



export default class App extends Component {
  render() {
    const imeFirme = "Prokleti sajt";
    return (
      <div>

        <Header ime={imeFirme} />
        <Main ime={imeFirme} />
        <Footer ime= {imeFirme}/>
      
               </div>
);
  }
}
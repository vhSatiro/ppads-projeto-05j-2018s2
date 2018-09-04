import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World da biblioteca em React</h1>
        </header>
        <p className="App-intro">
		Biblioteca em React para o trabalho de Prática em ADS, desenvolvido por Bianca, Fernando, João, Matheus e Vinicius!
        </p>
      </div>
    );
  }
}

export default App;

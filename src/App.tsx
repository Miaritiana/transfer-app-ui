import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className='App-logo' src="logo.png" alt="LOGO" />
        </div>
        <div className='btn-login'>
          <div className='App-header-btn'>S'inscrire</div>
          <div className='App-header-btn'>Se connecter</div>
        </div>
      </header>
      <div className='main'>
        <div className='main-card'>
          <h4>Nos services</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cum eum saepe aut quo nisi autem consequatur odit, distinctio suscipit deserunt inventore veritatis laboriosam facilis pariatur voluptatibus quod veniam atque!
            <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='main-card'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cum eum saetempora asperiores repellendus, pe aut quo nisi autem consequatur odit, distinctio suscipit deserunt inventore veritatis laboriosam facilis pariatur voluptatibus quod veniam atque!
            <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='App-header-btn'>Commencez</div>
        </div>
      </div>
    </div>
  );
}

export default App;

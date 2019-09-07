import React from 'react';
import './App.css';
import MainPage from './Components/MainPage'
import Links from './Components/Links'





function App() {
  return (
    <div className="App">
      <header>
        <div className="roma-topleft">||||Roma||||</div>
        <Links />
      </header>
      <main>
        <MainPage/>
      </main>
      <footer />
    </div>
  )
}

export default App;

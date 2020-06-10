import React from 'react';
import logo from './logo.svg';
import './App.css';
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tanacchi</h1>
        <p>This is the tanacchi's portfolio.</p>
      </header>
      <Access />
      <Affiliations />
      <Events />
      <Works />
      <Skills />
      <h2 id="internships">Internships</h2>
      <ul>
        <li>株式会社OPTiM R&Dチーム 2-weeks</li>
      </ul>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'
import Skills from './components/Skills'
import Internships from './components/Internships'

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
      <Internships />
    </div>
  );
}

export default App;

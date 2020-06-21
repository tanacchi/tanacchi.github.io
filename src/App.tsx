import React from 'react'
import './App.css'
import Header from './components/Header'
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'
import Skills from './components/Skills'
import Internships from './components/Internships'

function App() {
  return (
    <div className="App">
      <Header />

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

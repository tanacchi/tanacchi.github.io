import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './App.css'
import Header from './components/Header'
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'
import Skills from './components/Skills'
import Internships from './components/Internships'

function App() {
  const handleSelect = (index: number, last: number) => {
    console.log(`{last} => {index}`)
  }

  return (
    <div className="App">
      <Header />
      <Tabs>
        <TabList>
          <Tab>Aceess</Tab>
          <Tab>Affiliations</Tab>
          <Tab>Events</Tab>
          <Tab>Works</Tab>
          <Tab>Skills</Tab>
          <Tab>Internships</Tab>
        </TabList>
        <TabPanel>
          <div id="tab-access">
            <Access />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="tab-affiliations">
            <Affiliations />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="tab-events">
            <Events />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="tab-works">
            <Works />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="tab-skilss">
            <Skills />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="tab-internships">
            <Internships />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;

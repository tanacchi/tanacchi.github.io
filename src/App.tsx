import React from 'react'
import './App.css'
import 'react-tabs/style/react-tabs.css'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import Header from './components/Header'
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'
import Skills from './components/Skills'
import Internships from './components/Internships'

function App() {
  const [value, setValue] = React.useState('1')
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <Header />
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange}>
            <Tab label="Access" value="1" />
            <Tab label="Affiliations" value="2" />
            <Tab label="Events" value="3" />
            <Tab label="Works" value="4" />
            <Tab label="Skills" value="5" />
            <Tab label="Internships" value="6" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Access />
          </TabPanel>
        <TabPanel value="2">
          <Affiliations />
          </TabPanel>
        <TabPanel value="3">
          <Events />
          </TabPanel>
        <TabPanel value="4">
          <Works />
          </TabPanel>
        <TabPanel value="5">
          <Skills />
          </TabPanel>
        <TabPanel value="6">
          <Internships />
          </TabPanel>
      </TabContext>
    </div>
  );
}

export default App;

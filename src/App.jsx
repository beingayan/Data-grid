import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Employee from './components/Employee';
import CompanyDetail from './components/CompanyDetail';
import Service from './components/Service';
import Exporting from './components/Export';
import MasterDetailComp from './components/MasterDetailComp';


function App() {
    return (
        <div className="App">
            <Tabs>
    <TabList>
      <Tab>Demo 1</Tab>
      <Tab>Demo 2</Tab>
      <Tab>Demo 3</Tab>
      <Tab>Demo 4</Tab>
      <Tab>Demo 5</Tab>
    </TabList>

    <TabPanel>
      <h2 className='center-text'>Simple Grid</h2>
      <p className='center-text'>Here you can change the column position</p>
      <Employee/>
    </TabPanel>
    <TabPanel>
      <h2 className='center-text' >Grid with Column resize</h2>
<CompanyDetail/>
    </TabPanel>
    <TabPanel>
      <h2 className='center-text' >Hide/Unhide column</h2>
<Service/>
    </TabPanel>
    <TabPanel>
      <h2 className='center-text' >Export</h2>
<Exporting/>
    </TabPanel>
    <TabPanel>
      <h2 className='center-text' >Export</h2>
<MasterDetailComp/>
    </TabPanel>
  </Tabs>
        </div>
    );
}

export default App;

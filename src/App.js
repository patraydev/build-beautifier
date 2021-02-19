import axios from "axios";

import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { config } from "./services";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Ilisarniq-Light.otf'

import MrNavbar from './components/MrNavbar.jsx';
import About from './components/About.jsx';
import Beautifier from './components/Beautifier.jsx';
import Contact from './components/Contact.jsx';
import Progress from './components/Progress.jsx';
import Edit from './components/Edit';
import Home from './components/Home.jsx';


function App() {
  const [raw, setRaw] = useState([]);
  const [beautiful, setBeautiful] = useState([]);
  const [beautifulDict, setBeautifulDict] = useState([]);
  const [record, setRecord] = useState(false);
  const [activeTable, setActiveTable] = useState('Summer 2007');
  const [tables, setTables] = useState(['Summer 2007', 'Winter 2008']);
  const [toggle, setToggle] = useState(false);

  //get raw menu data on page mount
  useEffect(() => {
    const getRaw = async () => {
      const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${activeTable}?view=Grid%20view`, config);
      setRaw(res.data.records);
    };
    getRaw();
    console.log('raw',raw);
  }, [activeTable]);

  //get unparsed beautiful data from Beautiful table
  useEffect(() => {
    const getBeautiful = async () => {
      const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Beautiful?view=Grid%20view`, config)
      setBeautiful(res.data.records);
    };
    getBeautiful();
  }, [toggle]);
  
  //sort beautiful data by modified time, set latest record and parse
 //create dict of JSON objects and beautiful table objects
  useEffect(() => {
    if (beautiful.length !== 0) {
      const beautifulObjects = [...beautiful].sort((a, b) => b.createdTime - a.createdTime)
      console.log('beautifulobjects', beautifulObjects);
      setRecord(JSON.parse(beautifulObjects[0].fields.JSONstring));
      setBeautifulDict(beautifulObjects.map((obj) => [JSON.parse(obj.fields.JSONstring), obj]));
      console.log('beautifulDict', beautifulDict);
    }
  }, [beautiful]);
  
  return (
    <div className="switch">
      <MrNavbar />
      <Route path='/home'>
        <Home tables={tables} setActiveTable={setActiveTable} record={record}/>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route> 
        <Route path='/progress'>
        <Progress beautifulDict={beautifulDict} setRecord={setRecord}/>
      </Route>
      <Route path='/edit'>
        <Edit record={record} beautifulDict={beautifulDict} setRecord={setRecord} setToggle={ setToggle}/>
      </Route>
      <Route path='/beatuifier'>
        <Beautifier raw={raw} table={activeTable} setToggle={setToggle}/>
      </Route>

    </div>
  );
}

export default App;

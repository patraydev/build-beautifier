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


function App() {
  const [raw, setRaw] = useState([]);
  const [beautiful, setBeautiful] = useState([]);
  const [record, setRecord] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getRaw = async () => {
      const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Summer%202007?view=Grid%20view`, config);
      setRaw(res.data.records);
    };
    getRaw();
    console.log('got raw');
  }, []);

  useEffect(() => {
    const getBeautiful = async () => {
      const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Beautiful?view=Grid%20view`, config);
      setBeautiful(res.data.records);
    };
    getBeautiful();
    console.log(beautiful);
  }, [toggle]);


  return (
    <div className="switch">
      <MrNavbar />
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route> 
        <Route path='/progress'>
        <Progress beautiful={beautiful} setRecord={ setRecord}/>
      </Route>
      <Route path='/edit'>
        <Edit record={record}/>
      </Route>
      <Route path='/beatuifier'>
        <Beautifier raw={raw} setToggle={setToggle}/>
      </Route>

    </div>
  );
}

export default App;

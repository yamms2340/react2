
import './App.css';
import Textform from './components/Textform';
import Nav from './components/Nav';
import About from './components/About';
import Alert from './components/Alert';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('dark')
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("light mode has enabled","danger")
      document.title='TEXTUTILS - LIGHT'
      // setInterval(()=>{
      //   document.title='textutils is amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title='INSTALL TEXTUTILS'
      // },1500)

    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("dark mode has enabled","success")
      document.title='TEXTUTILS - DARK'

    }
  }
  const tg=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#301934'
      document.title='TEXTUTILS - DARK'
      showalert("dark purple has enabled","success")

    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.title='TEXTUTILS - LIGHT'

      showalert("light mode has enabled","danger")
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Nav title="uten" Home="HOME1" search="SEARCH" mode={mode} toggleMode={toggleMode} tg={tg}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/"> */}
          <Textform heading="write text here" mode={mode} showalert={showalert}/>

          {/* </Route>
        </Switch> */}
    </div>
    <About/>
    {/* </Router> */}
   </>
  );
}
export default App;

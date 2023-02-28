import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import React,{useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,   
    })
    setTimeout(() => {
     setAlert(null);  
    }, 3000);
  }

  
  const onToggle=()=>{
    if(mode=='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#091a32';
      showAlert("Dark mode has been enable","success")
    }
      else
     {
      setMode("light");
      document.body.style.backgroundColor='#fdfeff'
      showAlert("Light mode has been enable","success")
     }
  }
  return (
    <>
     {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} onToggle={onToggle}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>}/> */}
          <Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>

        {/* </Routes> */}
     </div>
     {/* </Router>  */}
    </>
  );
}

export default App;

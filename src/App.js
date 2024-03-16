
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      // document.title = `TextUtil - Dark Mode`;
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title = `TextUtil - Light Mode`;
    }
  }

  return (
    <>
       <Router> 
        <Navbar title="TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
           <Routes>
            <Route path="/about" element={<About mode={mode} />} /> 
            <Route path="/" element={ <TextForm showAlert={showAlert} heading="TextUtils- Word Counter,Charecter Counter,Download Text" mode={mode}/>}/>
           </Routes> 
          {/* <About mode={mode}/> */}
        </div>
      </Router> 
    </>
  );
}

export default App;

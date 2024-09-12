import './App.css';
import Navbar from './components/Navbar'; 
import ContactForm from './components/ContactForm'; 
import { useState } from 'react';
import Alert from './components/Alert';
import About from "./components/About";

import{
  BrowserRouter as Router,
  Switch ,
  Route,
  Routes,
  Link
} from "react-router-dom";
                
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)

  }

  // to change mode (dark and light mode)
  const togglemode =()=>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    
      <Routes> 
        <Route exact path="/"  element={<ContactForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}  />
        <Route exact path="/about" element={<About />} />
      </Routes>
    
      </div>
    </Router>
      
    </>
  );
}

export default App;
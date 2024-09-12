import './App.css';
import Navbar from './components/Navbar'; 
import ContactForm from './components/ContactForm'; 
import { useState } from 'react';
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode =()=>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode={togglemode}/>
      <div className="container my-3">
         
        <ContactForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
    
      </div>
    </>
  );
}

export default App;
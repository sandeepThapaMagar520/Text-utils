import './App.css';
import Navbar from './components/Navbar'; 
import ContactForm from './components/ContactForm'; 
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        
        <ContactForm heading="Enter the text to analyze below" />
        {/* <About/> */}
    
      </div>
    </>
  );
}

export default App;
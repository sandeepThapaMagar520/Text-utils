import './App.css';
import Navbar from './components/Navbar'; // Renamed Navbar
import ContactForm from './components/ContactForm'; // Renamed TestForm

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        
        <ContactForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
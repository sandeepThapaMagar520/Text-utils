import './App.css';

let name = "sandeep";
function App() {
  return (
    // jsx fragemnt- meaning returning more than one elements 
    <>
      <nav>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </nav>
      <div className="container">
        <h1>hello {name}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam, inventore iusto in veniam natus pariatur porro molestias quasi perferendis.
      </div>
    </>    
  );
}

export default App;

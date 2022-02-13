import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dom K's Portfolio</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App'>
        <button type="button" onClick={()=> window.open("https://pogbotter.herokuapp.com", "_blank")}>Pog Bot</button>
      </div>
        
      </header>
      
    </div> 
    
    
  ); 
}


export default App;

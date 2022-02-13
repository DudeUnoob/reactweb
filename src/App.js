import React from "react";
import './App.css';
import Navbar from "./navbar";

const App = () => {
    return (
        <body className="App" style={{display: 'flex', justifyContent:'center', alignItems: 'start', height: '100vh'}}> 
            
        <div>  
            <h1 >Dom's Portfolio</h1>
            
        
            <button type="button" onClick={()=> window.open("https://pogbotter.herokuapp.com", "_blank")}>Pog Bot</button>
            
        </div>
        <div>
            <section>
            <Navbar></Navbar>
            </section>
        </div>
        </body>
         
        
    )
}

export default App;
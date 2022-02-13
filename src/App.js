// import React from "react";
// import './App.css';
// import Navbar from "./navbar";
// import logo from '../src/images/logo.svg';

// const App = () => {
//     return (
//         <body className="App" style={{display: 'flex', justifyContent:'center', alignItems: 'start', height: '100vh'}}> 
            
//         <div>  
//             <h1 >Dom's Portfolio</h1>
            
        
//             <button type="button" onClick={()=> window.open("https://pogbotter.herokuapp.com", "_blank")}>Pog Bot</button>
            
//         </div>
//         <div>
//             <section>
            
//             </section>
//         </div>
//         </body>
         
        
//     )
// }

// export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/'  element={<Home/>}/>
          <Route  path='/about' element={<About/>} />
          <Route  path='/events' element={<Events/>} />
          <Route  path='/annual' element={<AnnualReport/>} />
          <Route  path='/team' element={<Teams/>} />
          <Route  path='/blogs' element={<Blogs/>} />
          <Route  path='/sign-up' element={<SignUp/>} />
        </Routes>
       
        
      </Router>

    );
  }
    

export default App;

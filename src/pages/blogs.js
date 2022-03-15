import React from 'react';
  
const Blogs = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Blogs of my Work</h1>
      
    </div>
    <div>
    <button type="button" onClick={()=> window.open("https://pgbott.herokuapp.com", "_blank")}>Pog Bot</button>
    </div>
    <div>
      <button className='ok'  type='button' onClick={() => window.open("https://api-roast.herokuapp.com", "_blank")}>Roast API</button>
    </div>
  </>
    
  );
};
  
export default Blogs;
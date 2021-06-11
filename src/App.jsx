import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('useEffect');
  });

  return(
    <div className="App">
      <header className="header">
        <h1>Create react app</h1>
      </header>
      <main className="main">
        <h2>React APP</h2>
      </main>
      <footer className="footer">
        <h3>React</h3>
      </footer>
    </div>
  );
}

export default App;

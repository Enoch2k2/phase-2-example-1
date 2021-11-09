import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

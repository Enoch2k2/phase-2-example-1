import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './Globals';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PetList from './components/pets/PetList';


const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/pets")
      .then(resp => resp.json())
      .then(data => setPets(data))
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pets" element={ <PetList pets={ pets } /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

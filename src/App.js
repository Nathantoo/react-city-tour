import React from 'react';
import Navbar from './components/Navbar'
import TourList from './components/TourList';
import Footer from './components/Footer';


function App () {
  return(
    <div className='App'>
     <Navbar />
     <TourList />
     <Footer />
    </div>
  )}

export default App;

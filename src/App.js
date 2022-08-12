import React from 'react';
import CountryData from './components/CountryData';
import Footer from './components/Footer';
import GlobalData from './components/GlobalData';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <Header/>
    <GlobalData/>
    <CountryData/>
    <Footer/>
    </div>
  );
}

export default App;

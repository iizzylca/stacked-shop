import React from 'react'
import './assets/css/App.css';
import Routes from './routes/routes'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Navbar/>
        <Routes/>
    </>
  );
}

export default App;


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './COMPONENT/Header';
//import Footer from './COMPONENT/Footer';
import Home from './COMPONENT/HOME/Home';
import Footer from './COMPONENT/Footer';
import JobLines from './COMPONENT/HOME/JobLines';



function App() {
  return( < >
  <Header></Header>
 
  <Home></Home>
  <Footer></Footer>
  
 
   </>
  );

  
  
}

export default App;

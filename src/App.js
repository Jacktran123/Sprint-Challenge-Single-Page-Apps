import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import Button from './components/Button';
import './App.css';


export default function App() {
  return (
    <main>
      <Header />
 
  <Route exact path='/' render={()=> <WelcomePage/> }/>
  
  <Route exact path='/Characterpage' render={()=> <CharacterList/> }/>
  <Route  path='/' render={()=> <Button/> }/>
  
  
      
      
     
    </main>
  );
}

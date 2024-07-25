import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect,useState } from "react";
import axios from 'axios';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Section title={'Top Albums'} endpoint={'https://qtify-backend-labs.crio.do/albums/top'}/>
        <Section title={'New Albums'} endpoint={'https://qtify-backend-labs.crio.do/albums/new'}/>
        <Section title={'Song'} endpoint={'https://qtify-backend-labs.crio.do/songs'}/>
      </header>
    </div>
  );
}

export default App;

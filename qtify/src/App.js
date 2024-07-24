import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect,useState } from "react";
import axios from 'axios';


function App() {
  // const [topALbums,setTopAlbums]=useState([]);


  // const getTopAlbums = async () => {

  //   try{
  //     let res=await axios.get('https://qtify-backend-labs.crio.do/albums/top');
  //     console.log(res.data);
  //     setTopAlbums(res.data);
  //   }catch(err){
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getTopAlbums();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Section title={'Top Albums'} endpoint={'https://qtify-backend-labs.crio.do/albums/top'}/>
        <Section title={'New Albums'} endpoint={'https://qtify-backend-labs.crio.do/albums/new'}/>
      </header>
    </div>
  );
}

export default App;

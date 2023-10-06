import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Spinner} from "./components/common/Spinner/Spinner";

function App() {
  return (
      <>
          <Header/>
      </>
  );
}

export default App;

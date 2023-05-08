import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { v4 as uuid } from "uuid";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoTemplate from "./component/TodoTemplate";
import TodoNav from "./component/TodoNav";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import TodoUpdate from "./component/TodoUpdate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

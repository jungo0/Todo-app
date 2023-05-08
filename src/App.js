import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { v4 as uuid } from "uuid";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoTemplate from "./component/todo_template";
import TodoNav from "./component/todo_nav";
import TodoHead from "./component/todo_head";
import TodoList from "./component/todo_list";
import TodoCreate from "./component/todo_create";
import TodoUpdate from "./component/todo_update";

const GlobalStyle = createGlobalStyle`
* {
  font-family:'Pretendard';
;
}
body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
  display:flex;
  justify-content:center;
  align-items:center;
}
`;

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

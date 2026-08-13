/*
import logo from './logo.svg';
import './App.css';

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
*/

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Login from './components/Accounts/login.js';
import AddTask from "./components/Tasks/addtask.js";
import {useState} from "react";


function App() {
  const appTitle = "React Demo Application"
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
      setLoggedIn(true);
  }

  return (
      <>
        <Header appTitle={appTitle} isLoggedIn={isLoggedIn}></Header>
        {/*<AddTask></AddTask>*/}
        <Login isLoggedIn={isLoggedIn} loginMethod={onLogin}></Login>
        <Footer></Footer>
      </>
  )
}

export default App;
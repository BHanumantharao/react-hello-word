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


function App() {
  return (
      <>
        <Header></Header>
        <Login></Login>
        <Footer></Footer>
      </>
  )
}

export default App;
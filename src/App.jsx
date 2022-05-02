import logo from './logo.svg';
import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post';
import CreatePosts from './Components/CreatePosts/CreatePosts';
import NavBar from './Components/NavBar/NavBar';

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
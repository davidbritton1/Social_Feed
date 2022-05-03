import logo from './logo.svg';
import './App.css';
import ReactDOM  from 'react-dom';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post';
import CreatePosts from './Components/CreatePosts/CreatePosts';
import NavBar from './Components/NavBar/NavBar';
import React, { useState } from 'react';



function App() {

  // const [initialPost, setInitialPost] = useState([{Name:'', Post:''}])


  return (
    <div>
      <div>
        <form action='' method='post'>
          <label for='first_name'>First Name: </label>
          <input type='text' name='first_name'></input>
          <label for='last name'>Last Name: </label>
          <input type='text' name='last_name'></input>

        </form>
      </div>
      
      <div>
        <h3>Name</h3>
        <p>actual post blah blah blah</p>
        <button>Like</button>
        <button>Dislike</button>
      </div>

    </div>
  );
}

export default App;

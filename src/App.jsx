import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post';
import CreatePosts from './Components/CreatePosts/CreatePosts';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';



function App(props) {

  console.log(props);

  return (
    <div>
      <div>
        {/* NavBar */}
        <NavBar navbar={props.NavBar}/>
      </div>
      <div>
        {/* CreatePost */}
        <CreatePosts createposts={props.CreatePosts}/>
      </div>
      <div>
        {/* Post */}
        <Post post={props.post}/>
      </div>
      <div>
        {/* DisplayPosts */}
        <DisplayPosts displayPosts={props.displayPosts}/>
      </div>
    </div>
  );
}

export default App;

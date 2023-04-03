import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'



const App = () => {
  const [post, setPost] = useState({
    title: null,
    author: null,
    description: null
  })

  //all allPosts from database
  const [allPosts, setAllPosts] = useState([]);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts allPosts={allPosts} setAllPosts={setAllPosts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost allPosts={allPosts} />
    },
    {
      path:"/new",
      element: <CreatePost post={post} setPost={setPost} />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>👍 Bet 1.0</h1>
        <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Challenge 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import NotFound from './pages/404'
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";

export type PostType = {
  userId: string,
  id: number,
  title: string,
  body: string,
}

export type PostComment = {
  postId: number;
  comments: string[];
};

export const getPosts = (): Promise<PostType[]> => {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => data)
}

const App = () => {  

  const [posts, setPosts] = useState<PostType[]>([])
  const [postComments, setPostComments] = useState<PostComment[]>([])

  useEffect(() => {
    if (posts.length === 0) {
      getPosts().then(setPosts)
    }
  }, [posts]);  

  const onAddComment = (postId: number, comment: string) => {
    const post = postComments.find(x => x.postId === postId)
    
    if (post) {
      post.comments = [comment, ...post.comments]
    } else {
      setPostComments([
        ...postComments,
        {
          postId: postId,
          comments: [comment]
        }
      ])
    }
  };

  return (
    <><br />
      <Router>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/">Home</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path={"/posts/:id"}>
            <Posts posts={posts} comments={postComments} onAddComment={onAddComment} />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router></>
  );
}
export default App;
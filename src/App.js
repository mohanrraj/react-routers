import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
        <Route path="/postpage" element={<PostItem />}>
          <Route index element={<PostPage />}></Route>
          <Route path=":id" element={<Post />}></Route>
          <Route path="newpost" element={<NewPost />}></Route>
        </Route>
      </Routes>
      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
    </div>
  );
}

export default App;

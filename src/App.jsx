import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Create from "./Pages/Create";
import { useEffect, useState } from "react";


function App() {
  const [blogs , setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });
  useEffect(() =>{
    localStorage.setItem("blogs",JSON.stringify(blogs));
  },[blogs]);


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home blogs={blogs}/>}/>
      <Route path="/blog/:id" element = {<Blog blogs={blogs} setBlogs={setBlogs}/>}/>
      <Route path="/create" element = {<Create blogs={blogs} setBlogs={setBlogs}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

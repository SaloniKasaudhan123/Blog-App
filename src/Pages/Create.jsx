import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { useNavigate } from "react-router-dom";

function Create({blogs , setBlogs}){
    const navi = useNavigate();
    const [title , setTitle] = useState("");
    const [author , setAuthor] = useState("");
    const [content , setContent] = useState("");

    function Publish(e){
        e.preventDefault(); 
        let obj = {
            id : uuidv4() ,
            title : title,
            author : author,
            content : content
        };
        const updatedBlog = [obj , ...blogs];
        setBlogs(updatedBlog);
        localStorage.setItem("blogs",JSON.stringify(updatedBlog));
        navi("/");
    }

    return<>
    <div className=" mt-6 ml-0.5 sm:ml-4">
    <h1 className="text-xl text-cyan-950 sm:text-2xl md:text-3xl">Create Blog</h1>
    <form action="#" className="mt-8 ml-1 flex flex-col sm:ml-4 md:ml-6" onSubmit={Publish}>
        <span>
        <label htmlFor="title" className="text-sm sm:text-xl  text-cyan-900">Blog Title : </label>
        <input type="text" id="title" placeholder="Enter Title" className="text-sm sm:text-xl  border-b-2 text-cyan-900 mb-6" onChange={(e)=>setTitle(e.target.value)} required/>
        </span>
        <span>
        <label htmlFor="author" className="text-sm sm:text-xl  text-cyan-900 pl-0">Author Name : </label>
        <input type="text" id="author" placeholder="Enter Name" className="pr-0 text-sm sm:text-xl border-b-2 text-cyan-900 mb-6" onChange={(e)=>setAuthor(e.target.value)} required/>
        </span>
        <span className="flex">
        <label htmlFor="content" className="text-sm sm:text-xl  text-cyan-900">Blog Content : </label>
        <textarea name="content" placeholder="Write Blog Content...." id="content" className="text-sm sm:text-xl border-b-2 text-cyan-900 mb-6 w-full row-6 h-20" onChange={(e)=>setContent(e.target.value)} required></textarea>
        </span>
        <span className="flex justify-center">
        <input type="submit" className="bg-cyan-700 text-sm sm:text-lg text-white pl-1 mt-10 w-28 h-6 rounded" value="Publish Blog"/>
        </span>
        </form>
    </div>
    </>
}

export default Create;
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { TbThumbUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Blog({blogs , setBlogs}){
    const navi = useNavigate();
    const {id} = useParams();
    const [like , setLike] = useState(false);

    const blog = blogs.find((b) => b.id == id);
   
    function Delete(){
        const newBlogs = blogs.filter((b) => b.id !==id);
        setBlogs( newBlogs);
        navi("/");
    }

    return<>
    <div className="mt-5 pl-4 pr-5">
    <h1 className="text-2xl text-cyan-900 mb-3">{blog.title}</h1>
    <h1 className="text-sm mb-3 pl-2">{blog.content}</h1>
    <h1 className="text-lg text-cyan-900 mb-4">{blog.author}</h1>
    <span className="flex gap-8 items-center ml-5">
    <TbThumbUp className={`size-8 ${like ? `bg-red-600 text-white rounded-4xl`:`bg-white`}`} onClick={()=>setLike(!like)}/>
    <button className="bg-red-500 text-white pl-1 mt-2 w-20 h-6 rounded" onClick={Delete}>Delete</button>
    </span>
    </div>
    </>
}

export default Blog;
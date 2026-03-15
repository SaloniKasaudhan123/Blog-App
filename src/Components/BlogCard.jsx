import { Link } from "react-router-dom";

function BlogCard({ blog }){
    
    return<>
    <div className="bg-gray-700 w-80 h-100 pl-4 pr-2 mr-2 pt-2 rounded-xl flex flex-col">
        <h2 className="text-cyan-500 text-xl mt-4">{blog.title}</h2>
        <h2 className="text-white mb-5 mt-4">{String(blog.content).substring(0,250)}...</h2>
        <Link to={`/blog/${blog.id}`} className="bg-cyan-600 text-white pl-1 mt-2 w-20 h-6 rounded">Read More</Link>        
    </div>
    </>
}

export default BlogCard;
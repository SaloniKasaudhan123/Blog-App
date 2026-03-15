import BlogCard from "../Components/BlogCard";

function Home({blogs}){
    
    return<>
    <div>
    <h1 className="mt-4 mb-8 ml-8 text-lg sm:text-xl font-semibold border-2 w-25 pl-2 rounded">All Blogs</h1>
    <div className="flex flex-wrap pl-10 gap-5">
    {
        blogs.map((blog)=>(
            <BlogCard key={blog.id} blog = {blog} />
        ))
    }
    </div>
    </div>
    </>
}

export default Home;
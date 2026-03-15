import {NavLink } from "react-router-dom";

function Navbar(){

    return<>
    <div className="bg-cyan-950 flex justify-between items-center sticky top-0">
        <h1 className="text-white text-xl pl-6 h-15 flex items-center sm:pl-8 sm:text-2xl md:pl-12 md:text-4xl">Blog</h1>
        <div className="pr-1 sm:pr-3 md:pr-8">
            <NavLink to="/" className={({isActive})=>`mr-4 text-sm hover:text-cyan-400 hover:underline sm:mr-8 md:mr-15 lg:mr-20 sm:text-xl ${isActive ? "transition duration-300 text-cyan-950 bg-cyan-400 rounded px-1 hover:text-cyan-900": "text-white"}`}>Home</NavLink>
            <NavLink to="/create" className={({isActive})=>`mr-5 text-sm hover:text-cyan-400 hover:underline sm:mr-10 md:mr-15 lg:mr-20 sm:text-xl ${isActive ? "transition duration-300 text-cyan-950 bg-cyan-400 rounded px-1 hover:text-cyan-900": "text-white"}`}>Create</NavLink>
        </div>
    </div>
    </>
}

export default Navbar;
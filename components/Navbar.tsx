export default function Navbar(){
    return (
        // <div>
        //     {/* <div className="flex justify-center fixed bg-primary-content z-50 opacity-90">
                
        //         <div className="">
        //             <h1 className="">Yash Barve</h1>
        //         </div>
        //         <div className="">
        //             <ul className="menu menu-horizontal px-1">
        //             <li><a>Item 1</a></li>
        //             <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //     </div> */}
        // </div>
        <nav className="invisible md:visible sticky top-0 z-10 bg-teal-950 md:bg-none md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30">
            <div className="px-20">
                <div className="flex items-center justify-around h-16 flex-wrap">
                <a href="/#hero" className="text-2xl text-white font-semibold hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-200 ease-in-out hover:drop-shadow-[0_6px_6px_rgba(0,0,0,1)]">Yash Barve</a>
                <ul className="menu menu-horizontal flex gap-5 ">
                        <li><a href="/#projects" className="text-white border border-none text-sm hover:border hover:border-primary ">Projects</a></li>
                        <li><a href="/#experience" className="text-white border border-none text-sm hover:border hover:border-primary">Experience</a></li>
                        <li><a href="/#education" className="text-white border border-none text-sm hover:border hover:border-secondary">Education</a></li>
                        <li><a href="/#contact" className="text-white border border-none text-sm hover:border hover:border-secondary">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
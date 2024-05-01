import Pill from "./Pill"

export default function Hero(){
    return (
        // <div className="pt-72 pb-96 bg-cyan-950">
        //     <div className="flex flex-col text-center justify-between mx-10">
        //         <h1 className="text-8xl font-extrabold mb-4 text-white">Yash H. Barve</h1>
        //         <h3 className="text-xl font-semibold text-gray-100">Computer Science at University of Waterloo</h3>
        //         <h3 className="text-xl font-semibold text-gray-100">Business Administration at Wilfrid Laurier University</h3>
        //         <div className="flex justify-center gap-5 mt-5">
        //             <Pill text="Projects" />
        //             <Pill text="Skills" />
        //             <Pill text="Education" />
        //             <Pill text="Experience" />
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen bg-primary-content">
            <div className="hero-content text-center flex flex-col">
                <div className="avatar mb-12">
                    <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                <h1 className="text-7xl mb-3 font-bold text-white">Hey! This is</h1>
                    <h1 className="text-8xl font-bold mb-12 text-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Yash H. Barve</h1>
                    <div className="relative mb-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md"></div>
                        <div className="relative mockup-code bg-gray-900">
                            <div className="flex flex-col items-start">
                                <pre data-prefix="$"><code>Software Developer</code></pre> 
                                <pre data-prefix=">" className="text-warning"><code>CS @ University of Waterloo</code></pre> 
                                <pre data-prefix=">" className="text-success"><code>BBA @ Wilfrid Laurier University</code></pre>
                            </div>
                        </div>
                    </div>
                    <ul className="menu menu-horizontal bg-primary-content flex gap-5">
                        <li><a href="#projects" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary ">Projects</a></li>
                        <li><a href="#experience" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary">Experience</a></li>
                        <li><a href="#education" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Education</a></li>
                        <li><a href="#contact" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
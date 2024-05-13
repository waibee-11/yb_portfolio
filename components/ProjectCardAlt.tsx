import Image from "next/image"
import Pill from "./Pill"

export default function ProjectCardAlt({name, description, image, github, live, tech, warning}: {name: string, description: string, image: string, github: string, live: string, tech: Array<string>, warning?:string}){
    return (
        // <div>
        //     <div className="flex px-3 py-24 justify-center gap-32 items-center">
        //         <div className="flex flex-col max-w-96">
        //             <h1 className="font-bold text-4xl text-wrap leading-9 mb-2">{name}</h1>
        //             <h3 className="text-md font-light text-wrap leading-5 mb-12">{description}</h3>
        //             <div className="flex gap-9">
        //                 <a href={github} className="bg-cyan-700 rounded-3xl px-4 py-1 font-semibold text-sm text-white cursor-pointer border border-cyan-700 hover:text-cyan-700 hover:bg-white shadow-lg ease-in-out duration-300">Github</a>
        //                 <a href={live} className="bg-cyan-700 rounded-3xl px-4 py-1 font-semibold text-sm cursor-pointer text-white border border-cyan-700 hover:text-cyan-700 hover:bg-white shadow-lg ease-in-out duration-300">Live Demo</a>
        //             </div>
        //         </div>
        //         <Image 
        //             src={image}
        //             height={300}
        //             width={300}
        //             alt='Your Name'
        //             className="rounded-3xl"
        //         />
        //     </div>
        // </div>
        <div className="col-span-1 relative max-w-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-md"></div>
            <div className="card bg-primary-content h-full">
                <figure><a href={live ? live : github} target="_blank"><img src={image} alt="Shoes" /></a></figure>
                <div className="card-body">
                    <div className="flex flex-col justify-between h-full gap-10">
                        <div className="top-part">
                            <h2 className="card-title text-2xl pb-3 text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-200 ease-in-out">
                                <a href={live ? live : github} target="_blank">{name}</a>
                            </h2>
                            <div>
                                <p className="text-md xl:text-lg text-gray-400">{description}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap py-5">
                                {tech?.map((key, item) => {
                                return (
                                    <div key={key} className="badge badge-primary">{key}</div>
                                )
                                })}
                            </div>
                        </div>
                        <div className="card-actions">
                            <a href={live} className="btn btn-primary btn-outline" target="_blank">Live demo</a>
                            {github && <a href={github} className="btn btn-secondary btn-outline" target="_blank">Github</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
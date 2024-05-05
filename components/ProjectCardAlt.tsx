import Image from "next/image"
import Pill from "./Pill"

export default function ProjectCardAlt({name, description, image, github, live, tech}: {name: string, description: string, image: string, github: string, live: string, tech: Array<string>}){
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
        <div className="relative w-4/5">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-2xl blur-md"></div>
            <div className="card lg:card-side shadow-xl bg-primary-content">
                <div className="card-body max-w-xl flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className="card-title text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-200 ease-in-out"><a href={live ? live : github}>{name}</a></h2>
                        <div className="mb-5">
                            <p className="text-wrap">{description}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {tech?.map((item) => {
                                return (
                                    <div className="badge badge-secondary">{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <a href={live} className="btn btn-secondary btn-outline">Live demo</a>
                        <a href={github} className="btn btn-primary btn-outline">Github</a>
                    </div>
                </div>
                <figure className="max-w-2/5"><a href={live ? live : github}><img src={image} alt="Album"/></a></figure>
            </div>
        </div>
    )
}
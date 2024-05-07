import Image from "next/image"
import Pill from "./Pill"

export default function ProjectCard({name, description, image, github, live, tech}: {name: string, description: string, image: string, github: string, live: string, tech: Array<string>}){
    return (
        // <div>
        //     <div className="flex px-3 py-24 justify-center gap-32 items-center">
        //         <Image 
        //             src={image}
        //             height={300}
        //             width={300}
        //             alt='Your Name'
        //             className="rounded-3xl"
        //         />
        //         <div className="flex flex-col max-w-96">
        //             <h1 className="font-bold text-4xl text-wrap leading-9 mb-2">{name}</h1>
        //             <h3 className="text-md font-light text-wrap leading-5 mb-12">{description}</h3>
        //             <div className="flex gap-9">
        //                 <a href={github} className="bg-cyan-700 rounded-3xl px-4 py-1 font-semibold text-sm text-white cursor-pointer border border-cyan-700 hover:text-cyan-700 hover:bg-white shadow-lg ease-in-out duration-300">Github</a>
        //                 <a href={live} className="bg-cyan-700 rounded-3xl px-4 py-1 font-semibold text-sm cursor-pointer text-white border border-cyan-700 hover:text-cyan-700 hover:bg-white shadow-lg ease-in-out duration-300">Live Demo</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md"></div>
            <div className="card lg:card-side shadow-xl bg-primary-content">
                <div className="max-w-2/5">
                    <a href={live ? live : github} target="_blank">
                        <Image 
                            src={image}
                            width={500}
                            height={500}
                            alt={name}
                            className="rounded-tl-2xl rounded-bl-2xl"
                        />
                    </a>
                </div>
                <div className="card-body w-3/5 flex flex-col justify-between max-w-2xl flex-wrap">
                    <div className="flex flex-col gap-2 max-w-xl">
                        <h2 className="card-title text-2xl text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-200 ease-in-out"><a href={live ? live : github} target="_blank">{name}</a></h2>
                        <div className="mb-5">
                            <p className="text-wrap text-lg">{description}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {tech?.map((key, item) => {
                                return (
                                    <div key={key} className="badge badge-primary">{key}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <a href={live} className="btn btn-primary btn-outline" target="_blank">Live demo</a>
                        <a href={github} className="btn btn-secondary btn-outline" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
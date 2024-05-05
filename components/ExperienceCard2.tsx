export default function ExperienceCard2({title, description, tech, org, duration}: {title:string, description:string, tech:Array<string>, org:string, duration:string}){
    return (
        // <div>
        //     <div>
        //         <div className="flex flex-col text-wrap max-w-xl">
        //             <h1 className="text-3xl font-semibold">{title} (4 months)</h1>
        //             <h2 className="italic mb-3">{org}</h2>
        //             <h3 className="text-wrap max-w-md text-md"><b className="font-semibold">Technologies used:</b> {tech}</h3>
        //         </div>
        //     </div>
        // </div>
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-md"></div>
            <div className="card glass h-full">
                <div className="card-body flex flex-col max-w-lg">
                    <div className="">
                        <h2 className="card-title text-black">{title}</h2>
                        <div className="mb-5">
                            <p className="text-sm text-black italic font-semibold">{org}</p>
                            <p className="text-sm text-black italic font-semibold">Duration: {duration}</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-wrap text-primary-content">{description}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {tech?.map((item) => {
                            return (
                                <div className="badge badge-primary-content">{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
interface EducationCardData{
    program: string,
    uni: string,
    courses: string
}

export default function EducationCard2({program, uni, courses}: EducationCardData){
    return (
        // <div>
        //     <div>
        //         <div className="flex flex-col text-wrap max-w-xl">
        //             <h1 className="text-white text-3xl font-semibold mb-1">{program}</h1>
        //             <h2 className="text-white italic mb-3">{uni}</h2>
        //             <h3 className="text-md text-white mb-3 font-light"><b className="font-semibold">Key courses taken: </b> {courses}</h3>
        //             <p className="text-white text-xs font-medium">Graduating in April 2026</p>
        //         </div>
        //     </div>
        // </div>
        <div tabIndex={0} className="col-span-1 collapse collapse-arrow bg-secondary text-secondary-content focus:bg-primary focus:text-primary-content max-w-xl h-full">
            <div className="collapse-title">
                <h1 className="text-3xl font-semibold mb-2">{program}</h1>
                <h2 className="text-xl font-medium">{uni}</h2>
            </div>
            <div className="collapse-content"> 
                <h3 className="text-md mb-3 font-light"><b className="font-semibold">Key courses taken: </b>{courses}</h3>             
                <p className="text-xs font-medium">Graduating in April 2026</p>
            </div>
        </div>
    )
}
import Image from "next/image"

interface BookInfo{
    title: string,
    author: string,
    image: string,
}

export default function BookCard({title, author, image}: BookInfo){
    return (
        <div className="col-span-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg"></div>
            <div className="card bg-gradient-to-tr from-gray-950 to-slate-900 shadow-xl h-full">
                <div className="flex flex-col justify-center h-full">
                    <div className="rounded-xl h-4/5">
                        <img src={image} alt="Shoes" className="h-full w-full object-cover rounded-t-xl" />
                    </div> 
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white text-xl">{title}</h2>
                        <p className="text-lg">by {author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
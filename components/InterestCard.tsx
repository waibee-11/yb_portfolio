interface InterestCard{
    image: string,
    name: string,
    desc: string,
    read: boolean,
}

export default function InterestCard({image, name, desc, read}: InterestCard){
    return (
        // <div className="flex flex-col max-w-96">
        //     <h1 className="text-3xl font-semibold mb-2">{name}</h1>
        //     <h3 className="text-md">{desc} {read ? <p><a className="hover:text-cyan-800 text-cyan-600 underline" href="https://www.f1.com">Here</a> are some of my recent reads.</p> : ""}
        //     </h3>
        // </div>
        // <div className="flex flex-col max-w-lg gap-7">
        //     <div className="relative w-56 self-center">
        //         <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md"></div>
        //         <div className="relative badge badge-ghost bg-primary-content text-3xl py-5 px-10 w-56 text-white">{name}</div>
        //     </div>
        //     <p className="text-white">{desc}
            // {read ? <a className="link link-hover text-primary" href="#"> Here are my some of my recent reads.</a> : ""}
        //     </p>
        // </div>
        <div className="relative max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-md"></div>
            <div className="card bg-primary-content h-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">
                    {name}
                    </h2>
                    <p>{desc}{read ? <a className="link link-hover text-primary" href="#"> Here are my some of my recent reads.</a> : ""}</p>
                </div>
            </div>
        </div>
    )
}
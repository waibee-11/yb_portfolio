export default function TitleWhite({text}:{text:string}){
    return (
        // <div className="text-center bg-white">
        //     <h1 className="text-6xl font-extrabold text-cyan-950 pt-5">{text}</h1>
        // </div>
        <div className="divider divider-primary">
            <h1 className="bg-primary-content text-4xl xl:text-6xl py-5 font-bold text-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">{text}</h1>
        </div>
    )
}
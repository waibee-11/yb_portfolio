export default function Pill({text}: {text:string}){
    return(
        <>
            <h3 className="px-4 py-1 text-sm text-white font-medium hover:text-cyan-300 cursor-pointer">{text}</h3>
        </>
    )
}
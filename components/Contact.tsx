export default function Contact(){
    return(
        <div className="flex justify-center py-20">
            <ul className="menu menu-horizontal bg-primary-content flex gap-10">
                <li><a href="#" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary">Email</a></li>
                <li><a href="#" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary">Github</a></li>
                <li><a href="#" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Twitter (X)</a></li>
                <li><a href="#" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Linkedin</a></li>
            </ul>
        </div>
    )
}
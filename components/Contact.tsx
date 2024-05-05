export default function Contact(){
    return(
        <div className="flex justify-center py-20">
            <ul className="menu menu-horizontal bg-primary-content flex flex-col sm:flex-row gap-10 items-center">
                <li><a href="mailto:yhbarve@uwaterloo.ca" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary">Email</a></li>
                <li><a href="https://github.com/waibee-11" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-primary">Github</a></li>
                <li><a href="https://twitter.com/waibee_11" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Twitter (X)</a></li>
                <li><a href="https://www.linkedin.com/in/waibee/" className="text-white border border-gray-900 text-sm bg-gray-900 hover:border hover:border-secondary">Linkedin</a></li>
            </ul>
        </div>
    )
}
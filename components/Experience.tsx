import ExperienceCard from "./ExperienceCard"
import ExperienceCard2 from "./ExperienceCard2"

export default function Experience(){
    return(
        <div className="pt-16 pb-32 flex justify-center gap-20 flex-wrap px-20">
            <ExperienceCard title="Frontend Developer Intern" description="Contributed in the development and testing of the company's website." duration="4 months" tech={["React", "Javascript", "TailwindCSS", "Git"]} org="Askme.org" />
            <ExperienceCard2 title="Data Analyst Intern" description="Performed data analysis and developed an ideal social media strategy across various channels while optimising budget." tech={["Microsoft Excel", "Tableau", "Python"]} duration="4 months" org="Lazaridis School of Business & Economics" />
            <ExperienceCard title="Software Developer Intern" description="Represented the company (client) in the website-development project. Worked with the external dev team." duration="4 months" tech={["NextJS", "Javascript", "TailwindCSS", "Git"]} org="Petrovision International LLC" />
            <ExperienceCard2 title="Executive Member" description="Member of the Web Development and Graphic Design team. Worked with the CSC website's frontend development team." tech={["React", "TailwindCSS", "Canva", "Figma"]} duration="8 months" org="Computer Science Club at UW" />
        </div>


        // <div className="flex justify-center my-20">
        //     <div className="carousel carousel-center max-w-4xl p-4 space-x-4 bg-neutral rounded-box">
        //         <div className="carousel-item">
        //             <ExperienceCard title="Frontend Developer Intern" description="Contributed in the development and testing of the company's website." duration="4 months" tech={["React", "Javascript", "TailwindCSS", "Git"]} org="Askme.org" />
        //         </div> 
        //         <div className="carousel-item">
        //             <ExperienceCard2 title="Data Analyst Intern" description="Performed data analysis and developed an ideal social media strategy across various channels while optimising budget." tech={["Microsoft Excel", "Tableau", "Python"]} duration="4 months" org="Lazaridis School of Business & Economics" />
        //         </div> 
        //         <div className="carousel-item">
        //             <ExperienceCard title="Software Developer Intern" description="Represented the company (client) in the website-development project. Worked with the external dev team." duration="4 months" tech={["NextJS", "Javascript", "TailwindCSS", "Git"]} org="Petrovision International LLC" />
        //         </div>
        //         <div className="carousel-item">
        //             <ExperienceCard title="Frontend Developer Intern" description="Contributed in the development and testing of the company's website." duration="4 months" tech={["React", "Javascript", "TailwindCSS", "Git"]} org="Askme.org" />
        //         </div> 
        //         <div className="carousel-item">
        //             <ExperienceCard2 title="Data Analyst Intern" description="Performed data analysis and developed an ideal social media strategy across various channels while optimising budget." tech={["Microsoft Excel", "Tableau", "Python"]} duration="4 months" org="Lazaridis School of Business & Economics" />
        //         </div> 
        //         <div className="carousel-item">
        //             <ExperienceCard title="Software Developer Intern" description="Represented the company (client) in the website-development project. Worked with the external dev team." duration="4 months" tech={["NextJS", "Javascript", "TailwindCSS", "Git"]} org="Petrovision International LLC" />
        //         </div>
        //     </div>
        // </div>
    )
}
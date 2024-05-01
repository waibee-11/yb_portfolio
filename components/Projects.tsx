import ProjectCard from "./ProjectCard";
import ProjectCardAlt from "./ProjectCardAlt";

export default function Projects(){
    return(
        <div className="px-12 flex flex-col items-center py-20 bg-primary-content gap-20">
            <ProjectCard name="Functional Clone of Medium.com" description="A blogging website where users can login, signup, create, edit and delete their blogs. A blogging website where users can login, signup, create, edit and delete their blogs. A blogging website where users can login, signup, create, edit and delete their blogs. A blogging website where users can login, signup, create, edit and delete their blogs." image="/medium-icon.jpeg" github="xyz" live="xyz" tech={["html", "css", "css", "css", "css", "css", "css", "css"]} />
            <ProjectCardAlt name="Functional Clone of Medium.com" description="A blogging website where users can login, signup, create, edit and delete their blogs." image="/medium-icon.jpeg" github="xyz" live="xyz" tech={["html", "css", "css", "css", "css", "css", "css", "css"]} />
            <ProjectCard name="Functional Clone of Medium.com" description="A blogging website where users can login, signup, create, edit and delete their blogs." image="/medium-icon.jpeg" github="xyz" live="xyz" tech={["html", "css"]} />
        </div>

    )
}
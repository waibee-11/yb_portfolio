import Skill1 from "./Skill1";
import Skill2 from "./Skill2"

export default function Skills(){
    return(
        <div className="bg-cyan-950 pb-32 pt-16 px-48">
            <div className="flex justify-center gap-12 flex-wrap pt-10">
                <Skill1 name="HTML" />
                <Skill1 name="CSS" />
                <Skill1 name="Javascript" />
                <Skill1 name="Typescript" />
                <Skill2 name="ReactJS" />
                <Skill2 name="Redux" />
                <Skill2 name="NextJS" />
                <Skill1 name="NodeJS" />
                <Skill1 name="Express" />
                <Skill1 name="Hono" />
            </div>
            <div className="flex justify-center gap-12 flex-wrap py-10">
                <Skill2 name="MongoDB" />
                <Skill2 name="MySQL" />
                <Skill2 name="Postgre SQL" />
                <Skill2 name="Prisma (ORM)" />
                <Skill1 name="Bootstrap CSS" />
                <Skill1 name="Tailwind CSS" />
                <Skill2 name="Docker" />
                <Skill2 name="Git" />
            </div>
        </div>
    )
}
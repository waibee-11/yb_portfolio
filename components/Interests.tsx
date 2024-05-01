import InterestCard from "./InterestCard";

export default function Interests(){
    return (
        <div className="flex justify-center gap-20 mt-20 mx-20 flex-wrap">
            <InterestCard image="/bools.jpeg" name="Reading" desc="I have recently started reading and I am slowly falling in love with it. I try reading non-fiction, but I pick up some fiction every now and then." read={true} />
            <div className="divider divider-horizontal divider-primary hidden xl:visible"></div>
            <InterestCard image="/ferrari.jpeg" name="Formula 1" desc="I have been watching F1 since the early 2010's. Scuderia Ferrari is my favorite team and Charles Leclerc is my favorite driver. I am also pretty good at playing F1 games on my PS5 (P.S I am so good that I use a simulator!)" read={false} />
            <div className="divider divider-horizontal divider-secondary hidden xl:visible"></div>
            <InterestCard image="/mi.jpg" name="Cricket" desc="Every Indian loves cricket. And I am no different. Even though I don't watch games live, I do keep up with the results and players. IPL is my thing and Mumbai Indians is my team." read={false} />
        </div>
    )
}
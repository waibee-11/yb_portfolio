import BookCard from "@/components/BookCard";

export default function Home(){
    return(
        <div className="px-20 py-20 bg-primary-content">
            <div className="text-center text-4xl text-white font-semibold pb-3">Yash&apos;s reading collection</div>
            <div className="text-center text-xl text-white font-light pb-20">As of June 18, 2024 (latest first)</div>
            <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-10">
                <BookCard title="The Rudest Book Ever" author="Shwetabh Gangwar" image="https://m.media-amazon.com/images/I/71iUJLYyM8L._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Eat That Frog" author="Brian Tracy" image="https://m.media-amazon.com/images/I/81pDx9j+xQL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Murder on the Orient Express" author="Agatha Christie" image="https://lyceumtheatre.org/wp-content/uploads/2019/09/Murder-on-the-Orient-Express-WebPstr.jpg" />
                <BookCard title="The Subtle Art of Not Giving a F*ck" author="Mark Manson" image="https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_DpWeblab_.jpg" />
                <BookCard title="Feel Good Productivity" author="Ali Abdaal" image="https://m.media-amazon.com/images/I/71IaEbGSeuL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Atomic Habits" author="James Clear" image="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="12 Rules for Life" author="Jordan B. Peterson" image="https://m.media-amazon.com/images/I/61BRxtp9qtL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Tuesdays with Morrie" author="Mitch Albom" image="https://m.media-amazon.com/images/I/91rcwTAx35L._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Stop Walking on Eggshells" author="Paul Mason & Randi Kreger" image="https://m.media-amazon.com/images/I/71LpQ2k5iWL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="The Go-Giver" author="Bob Burg & John David Mann" image="https://m.media-amazon.com/images/I/81ypH4lWAmL._AC_UF1000,1000_QL80_DpWeblab_.jpg" />
                <BookCard title="The Alchemist" author="Paulo Coelho" image="https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UF1000,1000_QL80_.jpg" />
                <BookCard title="Do Epic Shit" author="Ankur Warikoo" image="https://m.media-amazon.com/images/I/516ADtnYxeL._AC_UF1000,1000_QL80_.jpg" />
            </div>
        </div>
    )
}
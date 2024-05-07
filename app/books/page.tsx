import BookCard from "@/components/BookCard";

export default function Home(){
    return(
        <div className="px-20 py-20 bg-primary-content">
            <div className="text-center text-4xl text-white font-semibold pb-3">Yash&apos;s reading collection</div>
            <div className="text-center text-xl text-white font-light pb-20">As of May 04, 2024 (latest first)</div>
            <div className="grid grid-cols-3 justify-items-center gap-20">
                <BookCard title="Murder on the Orient Express" author="Agatha Christie" image="https://lyceumtheatre.org/wp-content/uploads/2019/09/Murder-on-the-Orient-Express-WebPstr.jpg" />

                <BookCard title="The Laws of Power" author="Robert Greene" image="https://www.bestbookstore.ca/cdn/shop/products/9780670881468.jpg?v=1691866257" />
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
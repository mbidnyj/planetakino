import Poster from "./Poster"

const filmPosters = [
    {
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fe/No_Time_to_Die_poster.jpg",
        title: "No Time to Die",
        description: "No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent, James Bond",
        date: "31.05.2022",
        price: "25$"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        title: "The King's Man",
        description: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions",
        date: "27.05.2022",
        price: "15$"
    },
    {
        image: "https://www.film.ru/sites/default/files/movies/posters/12837297-2145714.jpg",
        title: "Top Gun: Maverick",
        description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
        date: "25.05.2022",
        price: "20$"
    }
]

function PosterList(){
    return(
        <div>
            {filmPosters.map(filmPoster=>{
                return <Poster
                key={filmPoster.title}
                image={filmPoster.image}
                title={filmPoster.title}
                description={filmPoster.description}
                date={filmPoster.date}
                price={filmPoster.price}
                />
            })}
        </div>
    )
}

export default PosterList
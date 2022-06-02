const filmPosters = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/ru/f/fe/No_Time_to_Die_poster.jpg",
        title: "No Time to Die",
        description: "No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent, James Bond",
        date: "31.05.2022",
        price: "25$",
        extended: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology",
        director: "Cary Joji Fukunaga",
        stars: "Daniel Craig, Ana de Armas, Rami Malek"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        title: "The King's Man",
        description: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions",
        date: "27.05.2022",
        price: "15$",
        extended: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions",
        director: "Matthew Vaughn",
        stars: "Ralph Fiennes, Gemma Arterton, Rhys Ifans"
    },
    {
        id:3,
        image: "https://www.film.ru/sites/default/files/movies/posters/12837297-2145714.jpg",
        title: "Top Gun: Maverick",
        description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
        date: "25.05.2022",
        price: "20$",
        extended: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
        director: "Joseph Kosinski",
        stars: "Tom Cruise, Jennifer Connelly, Miles Teller"
    }
]

export function getFilms(){
    return filmPosters
}

export function getExactFilm(id){
    if(id>=1&&id<=filmPosters.length+1){
        return filmPosters[id-1]
    }else{
        return null
    }
}
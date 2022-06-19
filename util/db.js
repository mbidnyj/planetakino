// const filmPosters = [
//     {
//         id: 1,
//         image: "https://upload.wikimedia.org/wikipedia/ru/f/fe/No_Time_to_Die_poster.jpg",
//         title: "No Time to Die",
//         description: "No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent, James Bond",
//         minPrice: 25,
//         extended: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology",
//         director: "Cary Joji Fukunaga",
//         stars: "Daniel Craig, Ana de Armas, Rami Malek",
//         cinetech: [
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1]
//         ],
//         imax: [
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0]
//         ]
//     },
//     {
//         id: 2,
//         image: "https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
//         title: "The King's Man",
//         description: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions",
//         minPrice: 15,
//         extended: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions",
//         director: "Matthew Vaughn",
//         stars: "Ralph Fiennes, Gemma Arterton, Rhys Ifans",
//         cinetech: [
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1]
//         ],
//         imax: [
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0]
//         ]
//     },
//     {
//         id:3,
//         image: "https://www.film.ru/sites/default/files/movies/posters/12837297-2145714.jpg",
//         title: "Top Gun: Maverick",
//         description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
//         minPrice: 20,
//         extended: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
//         director: "Joseph Kosinski",
//         stars: "Tom Cruise, Jennifer Connelly, Miles Teller",
//         cinetech: [
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1],
//             [0,0,0,0,0],
//             [1,1,1,1,1]
//         ],
//         imax: [
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0],
//             [1,1,1,1,1,1,1,1,1,1],
//             [0,0,0,0,0,0,0,0,0,0]
//         ]
//     }
// ]
///////////////////////



const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.set('debug', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/admin');
}

const filmSchema = new mongoose.Schema({
    // _id: String,
    title: String, 
    // image: String,
    description: String,
    minPrice: Number,
    extended: String,
    director: String,
    stars: String,
    cinetech: Array,
    imax: Array
  });

const Films =  mongoose.models.film_collections || mongoose.model('film_collections', filmSchema, 'film_collections');

////////////////////////

export async function getFilms(){

    const films = await Films.find();
    // console.log(films);
    for(let film of films){
        if(!film.cinetech.length||!film.imax.length){
            film.cinetech =  [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
            ]
            film.imax = [
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0]
                        ]
            await film.save()
        }
    }
    return films
}

export async function getExactFilm(_id){
    console.log(_id)
    let film = await Films.findById(_id)
    console.log("azaza",film)
    return film
}

export async function changeFilmDataCinetech(_id, newCinetech){

    let film = await Films.findById(_id)
    
    film.cinetech = newCinetech
    await film.save()
}

export async function changeFilmDataImax(_id, newImax){
    
    let film = await Films.findById(_id)

    film.imax = newImax
    await film.save()
}
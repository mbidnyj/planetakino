import { getImageURLForExactFilm } from './imageURL';


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.set('debug', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/admin');
}

const filmSchema = new mongoose.Schema({
    title: String, 
    image: String,
    description: String,
    minPrice: Number,
    extended: String,
    director: String,
    stars: String,
    cinetech: Array,
    imax: Array,
    imageUrl: String
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
        if(!film.imageUrl){
            // console.log("film", film)
            // console.log("film.image", film.image)
            film.imageUrl = await getImageURLForExactFilm(film.image)
            await film.save()
        }
    }
    return films
}

export async function getExactFilm(_id){
    // console.log(_id)
    let film = await Films.findById(_id)
    // console.log("azaza",film)
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
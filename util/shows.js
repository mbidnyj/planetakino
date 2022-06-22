const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // mongoose.set('debug', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/admin');
}

const filmImageSchema = new mongoose.Schema({
    filmFormat: String,
    price: Number,
    date: Date,
    film_collection: String,
    cinetech: Array,
    imax: Array
  });

const FilmShows =  mongoose.models.shows || mongoose.model('shows', filmImageSchema, 'shows');


export async function getAllShows(){

    const filmShows = await FilmShows.find()
    // console.log(filmShows)
    for(let filmShow of filmShows){
        if(!filmShow.cinetech.length||!filmShow.imax.length){
            filmShow.cinetech =  [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
            ]
            filmShow.imax = [
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
            await filmShow.save()
        }
    }
    return filmShows
}

export async function changeShowData(_id, newShowData, format){

    // console.log("params!!!!!!!!!!!!", _id, newShowData, format)
    let film = await FilmShows.findById(_id)
    
    console.log("database response", film)
    if(format=="cinetech"){
        film.cinetech = newShowData
    }else{
        film.imax = newShowData
    }

    await film.save()
}
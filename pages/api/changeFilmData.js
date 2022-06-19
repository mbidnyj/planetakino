import { changeFilmDataCinetech } from "../../util/db"
import { changeFilmDataImax } from "../../util/db"

async function handler(req, res){
    const body = JSON.parse(req.body)
    const newCinema = body.newCinema
    const filmId = body.filmId
    const filmFormat = body.filmFormat
    // console.log(body)

    if(filmFormat=="cinetech"){
        await changeFilmDataCinetech(filmId, newCinema)
        res.status(200)
    }else if(filmFormat=="imax"){
        await changeFilmDataImax(filmId, newCinema)
        res.status(200)
    }
}

export default handler
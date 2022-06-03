import {getExactFilm} from '../../util/db'

async function handler(req,res){
    const filmId = req.query.id
    let film = await getExactFilm(filmId)
    if(film){
        return res.status(200).json(film.cinetech)
    }else{
        return res.send(404)
    }

}

export default handler
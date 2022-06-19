import { getExactFilm } from "../../util/db";

async function handler(req, res){
    const filmId = req.query._id
    let film = await getExactFilm(filmId)
    if(film){
        return res.status(200).json(film.imax)
    }else{
        return res.send(404)
    }
}

export default handler
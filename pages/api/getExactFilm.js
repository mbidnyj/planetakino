import {getExactFilm} from '../../util/db'

async function handler(req,res){
    const filmId = req.query._id
    // console.log("_id", filmId)
    let film = await getExactFilm(filmId)
    if(film){
        return res.status(200).json(film)
    }else{
        return res.send(404)
    }

}

export default handler
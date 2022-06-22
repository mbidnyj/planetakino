import {getAllShows} from "../../util/shows"

async function handler(req, res){
    let allShows = await getAllShows()
    
    // console.log(allShows)
    if(allShows){
        const filmId = req.query._id
        const showsForExactFilm = []
        for(let show of allShows){
            if(show.film_collection==filmId){
                showsForExactFilm.push(show)
            }
        }
        return res.status(200).json(showsForExactFilm)
    }else{
        return res.send(404)
    }
    
}

export default handler
import {getAllShows} from "../../util/shows"

async function handler(req, res){
    let allShows = await getAllShows()
    
    // console.log(allShows)
    if(allShows){
        const showId = req.query._id
        let showForExactFilm = {}
        for(let show of allShows){
            if(show.film_collection==showId){
                showForExactFilm = show
                break
            }
        }
        return res.status(200).json(showForExactFilm)
    }else{
        return res.send(404)
    }
    
}

export default handler
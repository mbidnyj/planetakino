import {getFilms} from '../../util/db'

async function handler(req, res){
    if(req.method==="GET"){
        let films = await getFilms()
        if(films){
            return res.status(200).json(films)
        }else;{
            return res.send(404)
        }
    }
    
}

export default handler

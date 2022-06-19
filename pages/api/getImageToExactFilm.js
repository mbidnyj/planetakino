import {getImageURLForExactFilm} from '../../util/imageURL'

async function handler(req, res){
    const imageId = req.query._id
    // console.log("response...")
    const imageURL = await getImageURLForExactFilm(imageId)
    if(imageURL){
        return res.status(200).json(imageURL)
    }else{
        return res.send(404)
    }
}

export default handler
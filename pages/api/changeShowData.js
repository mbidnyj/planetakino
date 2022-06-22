import {changeShowData} from '../../util/shows'

async function handler(req, res){
    const body = JSON.parse(req.body)
    const showId = body.showId
    const newCinema = body.newCinema
    const filmFormat = body.filmFormat
    // console.log(body)

    await changeShowData(showId, newCinema, filmFormat)
    res.status(200)
}

export default handler
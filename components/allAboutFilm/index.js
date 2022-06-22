import {useEffect, useState} from "react"

import classes from './allAboutFilm.module.css'
import MiniPost from './miniPost'

function AllAboutFilm(props){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedShows, setLoadedShows] = useState([])

    const _id=props._id
    const title=props.title
    const imageUrl=props.imageUrl
    const description=props.description
    const minPrice=props.minPrice
    const extended=props.extended
    const director=props.director
    const stars=props.stars

    const fullImageUrl = "http://localhost:1337"+imageUrl
    // const cinetech=props.cinetech
    // const imax=props.imax
    
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const url  = "http://localhost:3000/api/getShowsToExactFilm?_id="+_id
            console.log(url)
            const response = await fetch(url)
            const data = await response.json()
            console.log("data is ...................", data)
            setIsLoading(false)
            setLoadedShows(data)
        }
        fetchData()
    }, [])



    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <div className={classes.container}>
                <h2>{title}</h2>
                <img className={classes.image} src={fullImageUrl} alt={title}/>
                <div className={classes.infoContainer}>
                    <h3>Description</h3>
                    <p>{description}</p>
                    <h3>Extended</h3>
                    <p>{extended}</p>
                    <h3>Director</h3>
                    <p>{director}</p>
                    <h3>Stars</h3>
                    <p>{stars}</p>
                </div>
                <div className={classes.ticketContainer}>
                    {loadedShows.map(show=>{
                        const formatedDate = show.date[0] + show.date[1] + show.date[2] + show.date[3] + "/" + show.date[5] + show.date[6] + "/" + show.date[8] + show.date[9] + "  |   " + show.date.slice(11, 19)
                        return <MiniPost
                                    date={formatedDate} 
                                    _id={_id}
                                    price={show.price} 
                                    title={title} 
                                    format={show.filmFormat}
                                    key={show._id}
                                />
                    })}
                </div>
            </div>
        )
    }
}

export default AllAboutFilm
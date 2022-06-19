import { useState, useEffect } from 'react'

import classes from './allAboutFilm.module.css'
import MiniPost from './miniPost'

function AllAboutFilm(props){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedImage, setLoadedImage] = useState("")

    console.log(props.image)
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const api = "http://localhost:3000/api/getImageToExactFilm?_id="+props.image
            const url = await fetch(api)
            const urlData = await url.json()
            const imageURL = "http://localhost:1337"+urlData
            // console.log(imageURL)
            setLoadedImage(imageURL)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const _id=props._id
    const image=props.image
    const title=props.title
    const description=props.description
    const minPrice=props.minPrice
    const extended=props.extended
    const director=props.director
    const stars=props.stars
    const cinetech=props.cinetech
    const imax=props.imax

    const today = new Date()
    const next1Day = new Date()
    next1Day.setDate(today.getDate() + 1)
    const next2Day = new Date()
    next2Day.setDate(today.getDate() + 2)
    const next3Day = new Date()
    next3Day.setDate(today.getDate() + 3)
    const next4Day = new Date()
    next4Day.setDate(today.getDate() + 4)


    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <div className={classes.container}>
                <h2>{title}</h2>
                <img className={classes.image} src={loadedImage} alt={title}/>
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
                    <MiniPost date={today.toDateString()} _id={_id} minPrice={minPrice} title={title}/>
                    <MiniPost date={next1Day.toDateString()} _id={_id} minPrice={minPrice} title={title}/>
                    <MiniPost date={next2Day.toDateString()} _id={_id} minPrice={minPrice} title={title}/>
                    <MiniPost date={next3Day.toDateString()} _id={_id} minPrice={minPrice} title={title}/>
                    <MiniPost date={next4Day.toDateString()} _id={_id} minPrice={minPrice} title={title}/>
                </div>
            </div>
        )
    }
}

export default AllAboutFilm
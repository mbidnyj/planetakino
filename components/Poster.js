import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from './Poster.module.css'


function Poster(props){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedImage, setLoadedImage] = useState("")


    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const api = "http://localhost:3000/api/getImageToExactFilm?_id="+props.image
            console.log(api)
            const url = await fetch(api)
            const urlData = await url.json()
            const imageURL = "http://localhost:1337"+urlData
            console.log(imageURL)
            setLoadedImage(imageURL)
            setIsLoading(false)
        }
        fetchData()
    }, [])
    
    const href='/inspectFilm/'+props._id
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <Link href={href}>
                <div className={styles.poster}>
                    <h2>{props.title}</h2>
                    <img className={styles.image} src={loadedImage} alt={props.title}/>
                </div>
            </Link>
        )
    }
}

export default Poster
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Poster from '../../components/Poster'

async function getFilmData(path){
    const url  = "http://localhost:3000/api/getFilms?id="+path
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

function InspectFilm(props){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedFilm, setLoadedFilm] = useState({})

    const route = useRouter()
    const path = route.query.id
    const url  = "http://localhost:3000/api/getFilms?id="+path

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const response = await fetch(url)
            const data = await response.json()
            setIsLoading(false)
            setLoadedFilm(data)
        }
        fetchData()
        // .then(response=>response.json())
        // .then(data=>{
        //     setIsLoading(false)
        //     setLoadedFilm(data)
        // })
        
    }, [])


    
    if(isLoading){
        return(
            <h1>this page is loading</h1>
        )
    }else{
        return(
            <Poster 
            id={loadedFilm.id} 
            image={loadedFilm.image} 
            description={loadedFilm.description} 
            date={loadedFilm.date} 
            price={loadedFilm.price}
            />
        )
    }
    
}


export default InspectFilm
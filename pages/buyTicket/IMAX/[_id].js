import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Line from '../../../components/CinemaModel/Line'
import classes from './IMAX.module.css'


function IMAX(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedIMAX, setLoadedIMAX] = useState([])
    const [loadedShowId, setLoadedShowId] = useState("")

    const router = useRouter()


    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () =>{
            const path = router.query._id
            const url  = "http://localhost:3000/api/getShowToExactSession?_id="+path
            const response = await fetch(url)
            const data = await response.json()
            setLoadedIMAX(data.imax)
            setIsLoading(false)
            setLoadedShowId(data._id)
            // console.log(data)
        }
        if(router.isReady){
            fetchData()
        }
    }, [router.isReady])


    function handlePlaceClick(event){
        const innerText = event.target.innerText - 1
        const row = Math.trunc(innerText/10)
        const column = Math.trunc(innerText%10)
        loadedIMAX[row][column] = 1
        let newCinema = []
            for(let i=0; i<loadedIMAX.length; i++){
                const newRow = loadedIMAX[i].slice()
                newCinema.push(newRow)
            }
        //changing IMAX cinema for exact film via API
        const dataObject = {
            newCinema: newCinema,
            showId: loadedShowId,
            filmFormat: "imax"
        }
        fetch('/api/changeShowData',{
            method: "post",
            body: JSON.stringify(dataObject)
        })
        //linking to contact form for exact film
        setLoadedIMAX(newCinema)
        const filmTitle = router.query.title
        const filmPrice = router.query.price
        const filmDate = router.query.date
        const filmFormat = router.query.format
        const filmPlace = innerText+1
        router.push({
            pathname:'/ContactForm',
            query: {
                title: filmTitle,
                price: filmPrice,
                date: filmDate,
                format: filmFormat,
                place: filmPlace
            }
        })
    }


    let counter = 0
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <div className={classes.container}>
                {loadedIMAX.map(line=>{
                    const count = counter
                    counter+=10
                    return <Line seatCount={count} isFreeLine={line} handlePlaceClick={handlePlaceClick}/>
                })}
                
            </div>
        )
    }
}

export default IMAX
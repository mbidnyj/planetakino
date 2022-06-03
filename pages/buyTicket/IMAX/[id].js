import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Line from '../../../components/CinemaModel/Line'
import classes from './IMAX.module.css'


function IMAX(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedIMAX, setLoadedIMAX] = useState([])

    const router = useRouter()
    const path = router.query.id
    const url  = "http://localhost:3000/api/getIMAXCinema?id="+path


    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            setLoadedIMAX(data)
            setIsLoading(false)
            console.log(data)
        }
        fetchData()
    }, [])


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
        setLoadedIMAX(newCinema)
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
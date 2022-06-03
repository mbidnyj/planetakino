import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Line from '../../../components/CinemaModel/Line'
import classes from './Cinetech+.module.css'


function Cinetech(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedCinetech, setLoadedCinetech] = useState([])

    const router = useRouter()
    const path = router.query.id
    const url  = "http://localhost:3000/api/getCinetechCinema?id="+path


    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            setLoadedCinetech(data)
            setIsLoading(false)
            console.log(data)
        }
        fetchData()
    }, [])


    function handlePlaceClick(event){
        const innerText = event.target.innerText - 1
        const row = Math.trunc(innerText/5)
        const column = Math.trunc(innerText%5)
        loadedCinetech[row][column] = 1
        let newCinema = []
            for(let i=0; i<loadedCinetech.length; i++){
                const newRow = loadedCinetech[i].slice()
                newCinema.push(newRow)
            }
        setLoadedCinetech(newCinema)
    }


    let counter = 0
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <div className={classes.container}>
                {loadedCinetech.map(line=>{
                    const count = counter
                    counter+=5
                    return <Line seatCount={count} isFreeLine={line} handlePlaceClick={handlePlaceClick}/>
                })}
                
            </div>
        )
    }
}

export default Cinetech
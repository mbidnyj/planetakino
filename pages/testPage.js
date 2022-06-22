// import {useState} from 'react'

// import Line from "../components/CinemaModel/Line"
// import classes from './testPage.module.css'


// function testPage(){
//     const [Cinema, setCinema] = useState([
//         [1,1,1,1,1],
//         [0,0,0,0,0],
//         [1,1,1,1,1],
//         [0,0,0,0,0],
//         [1,1,1,1,1]
//     ])


//     function handlePlaceClick(event){
//         const innerText = event.target.innerText - 1
//         const row = Math.trunc(innerText/5)
//         const column = Math.trunc(innerText%5)
//         Cinema[row][column] = 1
//         let newCinema = [[],[],[],[],[]]
//             for(let i=0; i<5; i++){
//                 for(let j=0; j<5; j++){
//                     newCinema[i][j]=Cinema[i][j]
//                 }
//             }
//         setCinema(newCinema)
//     }


//     let counter = 0
//     return(
//         <div className={classes.container}>
//             {Cinema.map(line=>{
//                 const count = counter
//                 counter+=5
//                 return <Line seatCount={count} isFreeLine={line} handlePlaceClick={handlePlaceClick}/>
//             })}
            
//         </div>
//     )
// }

// export default testPage
import {useEffect, useState} from "react"

function testFunction(props){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedShows, setLoadedShows] = useState([])



    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            // console.log("fetch function")
            const url  = "http://localhost:3000/api/getShowsToExactFilm?_id=62af8d047329f99cf0b7c67b"
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
            <div>
                {loadedShows.map(show=>{
                    return <p>{show.filmFormat}</p>
                })}
            </div>
        )
    }
}

export default testFunction
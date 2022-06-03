import {useState} from 'react'

import Line from "../components/CinemaModel/Line"
import classes from './testPage.module.css'


function testPage(){
    const [Cinema, setCinema] = useState([
        [1,1,1,1,1],
        [0,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,0],
        [1,1,1,1,1]
    ])


    function handlePlaceClick(event){
        const innerText = event.target.innerText - 1
        const row = Math.trunc(innerText/5)
        const column = Math.trunc(innerText%5)
        Cinema[row][column] = 1
        let newCinema = [[],[],[],[],[]]
            for(let i=0; i<5; i++){
                for(let j=0; j<5; j++){
                    newCinema[i][j]=Cinema[i][j]
                }
            }
        setCinema(newCinema)
    }


    let counter = 0
    return(
        <div className={classes.container}>
            {Cinema.map(line=>{
                const count = counter
                counter+=5
                return <Line seatCount={count} isFreeLine={line} handlePlaceClick={handlePlaceClick}/>
            })}
            
        </div>
    )
}

export default testPage
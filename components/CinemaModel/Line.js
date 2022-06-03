import Place from "./Place"
import classes from './Line.module.css'

function Line({seatCount, isFreeLine, handlePlaceClick}){
    let counter = seatCount
    return(
        <div className={classes.line}>
            {isFreeLine.map(place=>{
                counter++
                return <Place seat={counter} isFreePlace={place} handlePlaceClick={handlePlaceClick}/> 
            })}
        </div>
    )
}

export default Line
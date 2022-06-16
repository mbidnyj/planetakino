import Link from 'next/link'

import classes from './allAboutFilm.module.css'
import FormatButton from './formatButton'


function MiniPost(props){
    const date = props.date
    const minPrice = props.minPrice
    const title = props.title
    const id = props.id
    return(
        <div className={classes.miniPost}>
            <h3>{date}</h3>
            <FormatButton format="Cinetech+" price={minPrice} title={title} date={date} id={id}/>
            <FormatButton format="IMAX" price={minPrice+5} title={title} date={date} id={id}/>
        </div>
    )
}
export default MiniPost
import Link from 'next/link'

import classes from './allAboutFilm.module.css'
import FormatButton from './formatButton'


function MiniPost(props){
    const date = props.date
    const minPrice = props.minPrice
    const title = props.title
    const _id = props._id
    return(
        <div className={classes.miniPost}>
            <h3>{date}</h3>
            <FormatButton format="Cinetech+" price={minPrice} title={title} date={date} _id={_id}/>
            <FormatButton format="IMAX" price={minPrice+5} title={title} date={date} _id={_id}/>
        </div>
    )
}
export default MiniPost
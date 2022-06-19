import Link from 'next/link'

import classes from './allAboutFilm.module.css'


function FormatButton(props){
    const format = props.format
    const price = props.price
    const title = props.title
    const date = props.date
    const _id = props._id
    const href = '/buyTicket/'+format+'/'+_id
    
    return(
        <Link href={{
            pathname: href,
            query: {
                title: title,
                format: format,
                price: price,
                date: date
            }
        }}>
            <a className={classes.link}>{props.format} {price}$</a>
        </Link>
    )
}

export default FormatButton
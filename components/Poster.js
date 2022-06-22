import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from './Poster.module.css'


function Poster(props){

    const _id = props._id
    const title = props.title
    const imageUrl = props.imageUrl

    const href='/inspectFilm/'+_id
    const fullImageUrl = "http://localhost:1337"+imageUrl
    
    return(
        <Link href={href}>
            <div className={styles.poster}>
                <h2>{title}</h2>
                <img className={styles.image} src={fullImageUrl} alt={title}/>
            </div>
        </Link>
    )
}

export default Poster
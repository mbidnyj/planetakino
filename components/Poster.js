import styles from './Poster.module.css'
import Link from 'next/link'


function Poster(props){
    return(
        <Link href={'/inspectFilm/'+props.id}>
            <div className={styles.poster}>
                <h2>{props.title}</h2>
                <img className={styles.image} src={props.image} alt={props.title}/>
            </div>
        </Link>
    )
}

export default Poster
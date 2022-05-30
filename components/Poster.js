import styles from './Poster.module.css'
import Link from 'next/link'

function buyHanler(){
    
}

function inspectHandler(){
    
}

function Poster(props){
    return(
        <div className={styles.poster}>
            <h2>{props.title}</h2>
            <img className={styles.image} src={props.image} alt={props.title}/>
            <h3>{props.description}</h3>
            <h3>{props.date}</h3>
            <h2>{props.price}</h2>
            <Link href={'../buyTicket/'+props.id}><a className={styles.link}>Buy ticket</a></Link>
            <Link href={'../inspectFilm/'+props.id}><a className={styles.link}>Inspect additional information</a></Link>
        </div>
    )
}

export default Poster
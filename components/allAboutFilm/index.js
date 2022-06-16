import classes from './allAboutFilm.module.css'
import MiniPost from './miniPost'

function AllAboutFilm(props){
    const id=props.id
    const image=props.image
    const title=props.title
    const description=props.description
    const minPrice=props.minPrice
    const extended=props.extended
    const director=props.director
    const stars=props.stars
    const cinetech=props.cinetech
    const imax=props.imax

    const today = new Date()
    const next1Day = new Date()
    next1Day.setDate(today.getDate() + 1)
    const next2Day = new Date()
    next2Day.setDate(today.getDate() + 2)
    const next3Day = new Date()
    next3Day.setDate(today.getDate() + 3)
    const next4Day = new Date()
    next4Day.setDate(today.getDate() + 4)


    return(
        <div className={classes.container}>
            <h2>{title}</h2>
            <img className={classes.image} src={image} alt={title}/>
            <div className={classes.infoContainer}>
                <h3>Description</h3>
                <p>{description}</p>
                <h3>Extended</h3>
                <p>{extended}</p>
                <h3>Director</h3>
                <p>{director}</p>
                <h3>Stars</h3>
                <p>{stars}</p>
            </div>
            <div className={classes.ticketContainer}>
                <MiniPost date={today.toDateString()} id={id} minPrice={minPrice} title={title}/>
                <MiniPost date={next1Day.toDateString()} id={id} minPrice={minPrice} title={title}/>
                <MiniPost date={next2Day.toDateString()} id={id} minPrice={minPrice} title={title}/>
                <MiniPost date={next3Day.toDateString()} id={id} minPrice={minPrice} title={title}/>
                <MiniPost date={next4Day.toDateString()} id={id} minPrice={minPrice} title={title}/>
            </div>
        </div>
    )
}

export default AllAboutFilm

import classes from './allAboutFilm.module.css'
import FormatButton from './formatButton'


function MiniPost(props){
    const _id = props._id
    const title = props.title
    const date = props.date
    const price = props.price
    const format = props.format

    if(format=="cinetech"){
        return(
            <div className={classes.miniPost}>
                <h3>{date}</h3>
                <FormatButton format="Cinetech+" price={price} title={title} date={date} _id={_id}/>
            </div>
        )
    }else{
        return(
            <div className={classes.miniPost}>
                <h3>{date}</h3>
                <FormatButton format="IMAX" price={price} title={title} date={date} _id={_id}/>
            </div>
        )
    }
    
}
export default MiniPost
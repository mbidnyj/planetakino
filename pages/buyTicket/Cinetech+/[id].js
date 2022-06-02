
import classes from './Cinetech+.module.css'

function Cinetech(){

    function handleClick(e){
        console.log(e.target.innerHTML)
    }

    return(
        <div className={classes.container}>
            <div className={classes.line}>
                <span className={classes.place} onClick={handleClick}>1</span><span className={classes.place} onClick={handleClick}>2</span><span className={classes.place} onClick={handleClick}>3</span><span className={classes.place} onClick={handleClick}>4</span><span className={classes.place} onClick={handleClick}>5</span>
            </div>
            <div className={classes.line}>
                <span className={classes.place} onClick={handleClick}>6</span><span className={classes.place} onClick={handleClick}>7</span><span className={classes.place} onClick={handleClick}>8</span><span className={classes.place} onClick={handleClick}>9</span><span className={classes.place} onClick={handleClick}>10</span>
            </div>
            <div className={classes.line}>
                <span className={classes.place} onClick={handleClick}>11</span><span className={classes.place} onClick={handleClick}>12</span><span className={classes.place} onClick={handleClick}>13</span><span className={classes.place} onClick={handleClick}>14</span><span className={classes.place} onClick={handleClick}>15</span>
            </div>
            <div className={classes.line}>
                <span className={classes.place} onClick={handleClick}>16</span><span className={classes.place} onClick={handleClick}>17</span><span className={classes.place} onClick={handleClick}>18</span><span className={classes.place} onClick={handleClick}>19</span><span className={classes.place} onClick={handleClick}>20</span>
            </div>
            <div className={classes.line}>
                <span className={classes.place} onClick={handleClick}>21</span><span className={classes.place} onClick={handleClick}>22</span><span className={classes.place} onClick={handleClick}>23</span><span className={classes.place} onClick={handleClick}>24</span><span className={classes.place} onClick={handleClick}>25</span>
            </div>
        </div>
    )
}

export default Cinetech
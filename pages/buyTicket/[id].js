import {useRouter} from 'next/router'
import Link from 'next/link'

import classes from './buyTicket.module.css'

function BuyTicket(){
    const router = useRouter()
    const route = router.query.id
    const today = new Date()
    
    return(
        <div className={classes.container}>
            <h1>Buy ticket for {today.toDateString()}</h1>
            <h2>In which format would you like to watch film?</h2>
            <Link href={'./Cinetech+/'+route}><a className={classes.link}>Cinetech+</a></Link>
            <Link href={'./IMAX/'+route}><a className={classes.link}>IMAX</a></Link>
        </div>
    )
}

export default BuyTicket
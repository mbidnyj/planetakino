import Link from 'next/link'

import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>PLANETAKINO</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">All films</Link>
                    </li>
                    <li>
                        <Link href="/createNewFilm">Create new film</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
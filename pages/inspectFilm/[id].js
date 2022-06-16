import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import AllAboutFilm from '../../components/allAboutFilm'


function InspectFilm(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedFilm, setLoadedFilm] = useState({})

    const router = useRouter()

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const path = router.query.id
            const url  = "http://localhost:3000/api/getExactFilm?id="+path
            const response = await fetch(url)
            const data = await response.json()
            setIsLoading(false)
            setLoadedFilm(data)
        }
        if(router.isReady){
            fetchData()
        }
    }, [router.isReady])


    
    if(isLoading){
        return(
            <h1>this page is loading</h1>
        )
    }else{
        return(
            <AllAboutFilm
                id={loadedFilm.id}
                image={loadedFilm.image}
                title={loadedFilm.title}
                description={loadedFilm.description}
                minPrice={loadedFilm.minPrice}
                extended={loadedFilm.extended}
                director={loadedFilm.director}
                stars={loadedFilm.stars}
                cinetech={loadedFilm.cinetech}
                imax={loadedFilm.imax}
                key={loadedFilm.id}
            />
        )
    }
    
}


export default InspectFilm
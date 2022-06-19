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
            const path = router.query._id
            const url  = "http://localhost:3000/api/getExactFilm?_id="+path
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setIsLoading(false)
            setLoadedFilm(data)
        }
        if(router.isReady){
            fetchData()
        }
    }, [router.isReady])



    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        return(
            <AllAboutFilm
                _id={loadedFilm._id}
                title={loadedFilm.title}
                image={loadedFilm.image}
                description={loadedFilm.description}
                minPrice={loadedFilm.minPrice}
                extended={loadedFilm.extended}
                director={loadedFilm.director}
                stars={loadedFilm.stars}
                cinetech={loadedFilm.cinetech}
                imax={loadedFilm.imax}
                key={loadedFilm._id}
            />
        )
    }
    
}


export default InspectFilm
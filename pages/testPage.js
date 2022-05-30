import {useState, useEffect} from 'react'

function testPage(){
    const [isLoaded, setIsLoaded] = useState(true)
    const [loadedPage, setLoadedPage] = useState()

    const url = "http://localhost:3000/api/getExactFilm?id=1"
    useEffect(()=>{
        fetch(url).then(response=>{
            return response.json()
        }).then(data=>{
            setIsLoaded(false)
            setLoadedPage(data)
        })
        
    }, [])

    console.log(loadedPage)

    if(isLoaded){
        return(
            <h1>loading...</h1>
        )
    }else{
        return(
            <div>
                <h1>{loadedPage.title}</h1>
                <img src={loadedPage.image} width="200px"alt="image"/>
            </div>
        )
    }
}

export default testPage
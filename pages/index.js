
import PosterList from "../components/PosterList"

function HomePage(props){
    return (
        <>
            <PosterList filmPosters={props.films}/>
        </>
    )
}

export async function getStaticProps(){
    const response = await fetch("http://localhost:3000/api/getFilms", {method: "Get"})
    const data = await response.json()
    // console.log(data)
    return {
        props:{
            films: data
        }
    }
}

export default HomePage
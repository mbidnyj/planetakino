import Poster from "./Poster"

function PosterList({filmPosters}){
    return(
        <div>
            {filmPosters.map(filmPoster=>{
                return <Poster
                key={filmPoster.title}
                image={filmPoster.image}
                title={filmPoster.title}
                description={filmPoster.description}
                date={filmPoster.date}
                price={filmPoster.price}
                id={filmPoster.id}
                />
            })}
        </div>
    )
}

export default PosterList
import Poster from "./Poster"

function PosterList({filmPosters}){
    // console.log(filmPosters)
    return(
        <div>
            {filmPosters.map(filmPoster=>{
                return <Poster
                key={filmPoster._id}
                image={filmPoster.image}
                title={filmPoster.title}
                _id={filmPoster._id}
                />
            })}
        </div>
    )
}

export default PosterList
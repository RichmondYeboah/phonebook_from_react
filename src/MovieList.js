import React, {useContext} from 'react';
import Movie from './Movie';
import  { MovieContext } from './MovieContext';

//props function is not working properly
const MovieList = (props, name) => {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <div className="section-content" >        
            {
                 movies.map(movie => (
               <Movie name={movie.name} price={movie.price} key={movie.id} />
            )) 
        }
        </div>
    );
}

export default MovieList;
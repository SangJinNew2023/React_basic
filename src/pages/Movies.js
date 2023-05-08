import React, {useState} from 'react';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';

const Movies = () => {
    const [movies, setMovies] = useState( []);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => { //조건식에 맞는 것만 반환 여기서는 삭제할 id에 해당하지 않는 것만 반환해서 출력
          return movie.id !== id;
        }));
      };

    const renderMovies = movies.length ? movies.map(movie => { //?legnth가 0크면 <Movie>를 보여주고 아니면 meg
        return (
          <Movie 
          movie={movie} 
          key={movie.id} 
          removeMovie={removeMovie}
          />
        );
      }):'추가된 영화가 없습니다.';
    
      const addMovie = (movie) => {
        setMovies([
          ...movies,
          movie
         ]);
      };

    return (
        <>
        <h1>Movie list</h1>
        <MovieForm addMovie={addMovie} />
        {renderMovies}
        </>
        
    );
};

export default Movies;
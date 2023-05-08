import React, {useState, useEffect} from 'react';
import InputField from './InputField'

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const validateForm = () => {
        resetErrors()
        let validated= true;
        if (!movieTitle) { //movieTitle가 들어 있지 않으면
            setTitleError('영화제목을 넣어주세요.')
            validated = false;

        }
        if (!movieYear) {
            setYearError('개봉년도를 넣어주세요.')
            validated= false;

        }
        return validated;
    }


    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) { //validateForm이 true이면 movie 추가
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear,
            });
            resetErrors()
            resetForm();

        }
        
    };
 
  return (
    <form onSubmit={onSubmit}>
        <InputField
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={e => setMovieTitle(e.target.value)}
        errorMessage={titleError}
        />

        <InputField
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={e => setMovieYear(e.target.value)}
        errorMessage={yearError}
        />
    
        {/* <input 
    type="number"
    value={movieYear}
    placeholder="Year"
    onChange={e => setMovieYear(e.target.value)}
    /><br />
    <div style={{color: 'red'}}>{yearError}</div> */}
    <button type="submit">Add Movie</button>
    </form>
    
  );
};

export default MovieForm;
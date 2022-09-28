import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Movie from "./Movies";
import "./Slide.css"
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs';


function Slide({ ytsApi }) {

    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [trans, setTrans] = useState(0);

    const onClickL = () => {
        if (trans >= 0) {
            return;
        }

        setTrans(current => current + 350);
    }

    const onClickR = () => {
        if (trans <= -2450) {
            return;
        }
        setTrans(current => current - 350);
    }



    const getMovie = async () => {
        const json = await (await fetch(ytsApi)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (<div className="slide_container">
        {isLoading ? (<Loading />) :
            (<div className="slide_show">
                <div className="slide" style={{
                    transform: `translateX(${trans}px)`
                }}>
                    {movies.map((movie) => (
                        <Movie key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={""}
                            poster={movie.medium_cover_image}
                            genres={movie.genres} />
                    ))}
                </div>
            </div>)
        }
        {isLoading ? null : (
            <div>

                <button className="left" onClick={onClickL}><BsFillCaretLeftSquareFill /></button>
                <button className="right" onClick={onClickR}><BsFillCaretRightSquareFill /></button>
            </div>
        )}

    </div>);

}

export default Slide;
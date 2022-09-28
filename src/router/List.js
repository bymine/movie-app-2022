import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { focusIndex, focusNav, listPageReLoading } from "../atom/Atom";
import Loading from "../components/Loading";
import Movie from "../components/Movies";
import "./List.css"

const listNums = [...Array(10)].map((_, i) => i + 1);



function List() {

    const { index, path } = useParams();

    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [reLoading, setReLoading] = useRecoilState(listPageReLoading)
    const focusPage = useSetRecoilState(focusNav);
    const [focusNum, setFocusNum ]= useRecoilState(focusIndex);




    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?page=${index}&sort_by=${path}`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }


    useEffect(() => {
        setReLoading(false);
        setLoading(true);
        focusPage(path);

        getMovies();
    }, [reLoading]);



    return <div className="list_container">
        {isLoading ? (<Loading />) : (
            <div className="list__movies">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>
        )}
        <ul className="list__footer">
            {isLoading ? null : listNums.map(listNum => {
                return (
                    <li>
                        <Link to={`/list/${path}/${listNum}`}
                            onClick={() => {
                                setFocusNum(listNum);
                                
                                if( parseInt( focusNum )!== listNum) {
                                    setReLoading(true);
                                }
                                
                            } }
                            className={listNum === parseInt( index) ? "focusing" : null}>
                            {listNum}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
}

export default List;
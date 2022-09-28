import './Pointer.css'

function Pointer({ background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, download_count }) {
    return <div>
        <img className="bg" src={background_image_original} alt={background_image_original}/>
        <div className="show"> 
            <img className="img" src={medium_cover_image} alt={medium_cover_image}/>
            <div className="textbox">
                <h1>{title_long}</h1>
                <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>Download {download_count}</li>
                        <li>
                            Genres
                            <ul>
                                {genres.map(genre => <li>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
            </div>
        </div>
    </div>;
}

export default Pointer;
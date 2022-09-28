import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Pointer from "../components/Pointer";

function Detail() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState({});

    const getDetail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDatas(json.data.movie);
        setLoading(false);

    };

    useEffect(() => {
        getDetail();
    }, []);

    console.log(datas);





    return <div>
        {isLoading ? <Loading /> : (<Pointer background_image_original={datas.background_image_original}
            medium_cover_image={datas.medium_cover_image}
            url={datas.url}
            title_long={datas.title_long}
            rating={datas.rating}
            runtime={datas.runtime}
            genres={datas.genres}
            download_count={datas.download_count} />)}
    </div>
}

export default Detail;
import React from "react";
import Slide from "../components/Slide";
import "./Home.css"
import { FiExternalLink } from 'react-icons/fi';
import { Link } from "react-router-dom";
import navList from "../atom/NavList";

function Home() {
    return (
        <div className="home_container">
            {navList.map(slide => {
                return (
                    <div className="slide_box">
                        <h3 className="slide__title">
                            <Link to={`/list/${slide.path}/1`}>
                                <FiExternalLink className="slide__icon" />
                                <span>{slide.title} Movies</span>
                            </Link>
                            
                        </h3>
                        <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}`} />
                    </div>
                );
            })

            }
        </div>
    );
}

export default Home;
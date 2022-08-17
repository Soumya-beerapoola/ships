import React from "react";
import "./home.css";
import { Link } from "react-router-dom";




const Ships = ({ home_port, image, name, id,year_built }) => {
    return (
        < >  
        <div className="card">
                <img src={image} ></img>
                <div className="details">
                    <div className="text">Ship Name:<span>{name}</span></div>
                    <div className="text">Id of ship: <span>{id}</span></div>
                    <div className="text">Year Bulit: <span>{year_built}</span></div>
                    <button className="button">
                        <Link to={`/ships/${id}`} style={{textDecoration:"none",color:"white"}}>View More</Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Ships;


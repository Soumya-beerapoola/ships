import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


const SearchBar =({data}) => {

    console.log(data,"data");

    return(
            <>
                    <div className="searchBox">  
                    {data.map((e) => {
                        return <div >
                               <Link to={`/ships/${e.id}`} style={{textDecoration:"none",color:"black"}}>{e.id}</Link> 
                               </div> 
                    })}
                </div>
            </>
    )
}

export default SearchBar;
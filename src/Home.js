import React from "react";
import "./home.css";
import search from "./assets/search.png";
import {Query} from "./Query";
import { useQuery } from "@apollo/client";
import Ships from "./Ships";
import { useState } from "react";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";

const Home = () => {

    const { loading, error,data } = useQuery(Query);
    const [value,setValue] = useState("");
    const [searchdata,setSearchdata] =useState([]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
  

   const Update = (e) => {
    setValue(e.target.value);

    setSearchdata( data.ships.filter((item) => {    
        return item.id.startsWith(value);
    }))
   }
    

    return (

        <>
            <div className="main">
                <header>
                    <div className="head">
                        <div><h1>Space</h1></div>
                        <div className="headRight">
                        <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link> 
                        <Link to="/about" style={{textDecoration:"none",color:"black"}}>About</Link>                
                        </div>
                    </div>
                </header>
                <div className="searchbar">
                    <div className="form">
                        <input placeholder="Search Ships Name..."  value={value} onChange={Update}/>
                        <div> <img src={search} height="25px"></img> </div>
                    </div>
                </div>
                <div className="searchTab">
                <SearchBar data={searchdata}></SearchBar>
                </div>
                <div className="allShips">
                               <div className="ships">
                            <h1>All Ships</h1>
                            <div className="shipsCard">
                { data?.ships.map((e) => {
                        return <Ships {...e}></Ships>
                     })
                }
                </div>
                </div>
                 </div>
            </div>
        </>

    )
}

export default Home;
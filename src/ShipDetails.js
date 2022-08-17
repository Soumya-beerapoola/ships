import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Query2 } from "./Query";
import "./shipdetails.css";
import { Link } from "react-router-dom";


const ShipDetails = ({searchID}) => {

    let {id} = useParams();
   
    const { loading, error,data } = useQuery(Query2, {variables: {id}})
        

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
      
    let newData = {...data.ships[0]}
    
    let {home_port,id:newId,image,mmsi,model,name,speed_kn,status,successful_landings,type,url,weight_kg,year_built} = newData;

    return(
       <>
         <div className="main">
                <header style={{position:"static"}}>
                    <div className="head">
                        <div><h1>Space</h1></div>
                        <div className="headRight">
                            {/* <a href="/home" className="">Home</a>
                            <a href="/about" className="">About</a> */}
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link> 
                        <Link to="/about" style={{textDecoration:"none",color:"black"}}>About</Link> 
                        </div>
                    </div>
                </header>
                <div className="content">
                <div className="shipPage">
                    <div className="shipImage">
                        <img src={image} height="300px" width="600px"></img>
                    </div>
                    <div className="descrpition">
                        <div>Name: <span>{name}</span></div>
                        <div>Model: <span>{model?model:"Not Avaialble"}</span></div>
                        <div>Type:<span>{type}</span></div>
                        <div>Year Bulit: <span>{year_built?year_built:"Not Avaialble"}</span></div>
                        <div>Status: <span>{status ? status:"Not Avaialble"}</span></div>
                        <div>Sucessful Landings: <span>{successful_landings?successful_landings:"Not Avaialble"}</span></div>
                        <div>Speed:<span>{speed_kn?speed_kn:"Not Avaialble"}</span></div>
                        <div>Weight In Kg:<span>{weight_kg}</span></div>
                        <div>Mmsi:<span>{mmsi}</span></div>
                        <div>URL:<span>
                           <a href={url} target="_blank" style={{color:"black"}}>Click Here</a>
                        </span></div>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ShipDetails;
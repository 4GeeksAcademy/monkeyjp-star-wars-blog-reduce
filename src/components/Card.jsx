import { useEffect, useState } from "react"



export const Card = ({type, data}) => {

   

    
    return (
        <div className="col-md-3 col-lg-2">
            <div className="card m-1" >
                <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${type == "character" ? "characters" : type}/${data.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{type == "character" ? `Genre: ${data.properties?.gender || "Loading..."}` : type== "planet" ? `Gravity: ${data.gravity}` : ``}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}
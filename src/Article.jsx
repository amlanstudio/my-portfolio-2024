import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Article(){

    const {id} = useParams();
    
    useEffect( () => {
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then( res => res.json() )
            .then( res => console.log(res) )
    })

    return(
        <div>
            <p>mon article</p>
            <h1>hgbterlfkqmzfwnbdjklfzmerkblkgrej</h1>
        </div>
    )
}
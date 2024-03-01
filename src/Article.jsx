import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { API_URL } from "./config";

export default function Article() {

    const {id}=useParams(null);
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);
    const [link, setLink] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
    
    setIsLoading(true);

    fetch(`${API_URL}/api/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        setTitle(data.data.attributes.title);
        setCategory(data.data.attributes.category);
        setDescription(data.data.attributes.description);
        setLink(data.data.attributes.Link);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        // Gérer les erreurs si nécessaire
    })
    .finally(() => {
        setIsLoading(false);
    });
}, [id]);

fetch(`${API_URL}/api/posts/${id}?populate=*`)
    .then(res => res.json())
    .then(data => {
        setPhoto(data.data.attributes.image.data[0].attributes.formats.thumbnail.url);
        })
    .catch(error => {
        console.error("Error fetching data:", error);
        // Gérer les erreurs si nécessaire
    })
    .finally(() => {
        setIsLoading(false);
    });


if (isLoading) {
return <div>Loading...</div>;
}

if (!title) {
return <div>Title not found</div>;
}

return (
<div className="container-article">
    <div className="photo-article">
        <img src={`${API_URL}${photo}`}/>
    </div>
    <div className="mon-article">
        <h1>{title}</h1>
        <h3>{category}</h3>
        <p>{description}</p>
        <a href={link} target="blank" className="showmore"><button>Je veux voir !</button></a>
    </div>
</div>

);
};
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { API_URL } from "./config";

export default function Article() {

    const {id}=useParams(null);
    // let [postState, setPost] = useState(null);
    // const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
    
    setIsLoading(true);

    fetch(`${API_URL}/api/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        // Supposons que la réponse de votre API a la structure suivante :
        // { id: "1", attributes: { title: "Titre de l'article", ... } }
        // setPhoto(data.attributes.image.data[0].attributes.formats.thumbnail.url);
        setTitle(data.data.attributes.title);
        setCategory(data.data.attributes.category);
        setDescription(data.data.attributes.description);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        // Gérer les erreurs si nécessaire
    })
    .finally(() => {
        setIsLoading(false);
    });
}, [id]);

if (isLoading) {
return <div>Loading...</div>;
}

if (!title) {
return <div>Title not found</div>;
}

return (
<div className="container-article">
    <div className="mon-article">
        {/* <img src={photo} alt="" /> */}
        {/* <img src={photo } /> */}
        <h1>{title}</h1>
        <h3>{category}</h3>
        <p>{description}</p>
    </div>
</div>

);
}
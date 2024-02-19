import React, {useEffect,useState} from "react";
import {Grid, Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import CardRealisation from "./CardRealisation";
// import axios from 'axios';



const Realisations = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([]);
    const [content, setContent]=useState([]); 
    const [category, setCategory]=useState([]); 

    const { isPage } = props;

    console.log("props page :" + JSON.stringify(isPage));

    

    useEffect(()=>{
        fetch('http://localhost:1337/api/posts?populate=*',
        {
            method : "GET",
            headers:{
                'Accept':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setPosts(res)
            setContent(res)
            setCategory(res)
            setIsLoading(false)
            // console.log(posts.data[0]) 
        });
    },[]);

    return(
        <div className="realisations-container">
            <h2 id="realisations">Mes réalisations</h2>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton width="60%" />
                    </Box>
                ) : posts.data.map ((post,key) => (isPage != true ?  (key < 8 ? <CardRealisation post={post} key={post.id}/> : '')  : <CardRealisation post={post} key={post.id}/>))}
            </Grid>
        </div>
    );
    };

export default Realisations;
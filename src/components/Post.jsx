import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { obtenerPost } from "../funciones/funciones";


const Post = () => {

    const [thispost, setThisPost] = useState(null)

    const idPost = useParams()

    useEffect(()=>{
        obtenerPost(idPost.id, setThisPost)
    },[])

    return (
        <>
        {
            thispost != null ? (
                <div>
                    <h2>Post {thispost.id}</h2>
                    <h3>Title {thispost.title}</h3>
                    <p>Body {thispost.body}</p>
                    <p>User {thispost.userId}</p>
                    <a href={`/posts/${thispost.id}/comments`}>Ver Comentarios</a>
                </div>
            ) : ('No hay posts')
        }
        </>
    )
}

export default Post
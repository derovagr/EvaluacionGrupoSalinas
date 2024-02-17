import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerComments } from "../funciones/funciones";

const Comments = () =>
{
    const [comments, setComments] = useState(null)

    const idPost = useParams()

    useEffect(()=>{
            obtenerComments(idPost.id,setComments)
        },[]
    )

    return (
        <>
        {
            comments != null ? (
                comments.map(comment=>(
                    <div key={comment.id}>
                        <h3>{comment.email}</h3>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : ('No hay comment')
        }
        </>
    )
}

export default Comments
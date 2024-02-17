import React, { useEffect, useState } from "react";
import { obtenerTodosLosPosts } from "../funciones/funciones";

const TodosLosPost = () =>
{
    const [posts, setPosts] = useState(null)

    useEffect(()=>{
            obtenerTodosLosPosts(setPosts)
        },[]
    )

    return (
        <>
        {
            posts != null ? (
                posts.map(post=>(
                    <div key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </div>
                ))
            ) : ('No hay posts')
        }
        </>
    )
}

export default TodosLosPost
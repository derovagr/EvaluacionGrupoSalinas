import axios from "axios";

const obtenerTodosLosPosts = async (state) =>{
    const peticion = await axios.get('https://jsonplaceholder.typicode.com/posts')        
    state(peticion.data)
}

const obtenerPost = async (id, state) => {    
    const peticion = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)    
    state(peticion.data)    
}

const obtenerComments = async (id, state) => {    
    const peticion = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')    
    state(peticion.data)
}

export {
    obtenerTodosLosPosts,
    obtenerPost,
    obtenerComments
}
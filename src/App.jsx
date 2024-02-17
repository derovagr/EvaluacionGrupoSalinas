import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import TodosLosPost from './components/TodosLosPost'
import Post from './components/Post'
import Comments from './components/Comments'


function App() {
  return(
    <BrowserRouter>

      <Navigation />

      <Routes>
      <Route index element={ <TodosLosPost /> } />
        <Route path='/posts' element={ <TodosLosPost /> } />
        <Route path='/posts/:id' element={ <Post /> } />
        <Route path='/posts/:id/comments' element={ <Comments /> } />
        <Route path='/posts/add' element={ <Comments /> } />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation()
{
  return <nav>
    <ul>
      <li>      
        <Link to='/posts'>Ver Todos los Posts</Link>
      </li>
      <li>      
        <Link to='/posts/add'>Crear Un Posts</Link>
      </li>
    </ul>
  </nav>
}

export default App

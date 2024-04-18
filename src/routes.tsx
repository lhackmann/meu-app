import {createBrowserRouter } from 'react-router-dom'
import Sobre from './Pages/sobre'
import Home from './Pages/home'
import NotFound from './Pages/404'
import Contato from './Pages/contato'
import Tarefas from './Pages/tarefas'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/contato', element: <Contato />},
  {path: '/tarefas', element: <Tarefas />}
])

export default router
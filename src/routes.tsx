import { createBrowserRouter } from 'react-router-dom'

import Home from './Pages/home'
import Sobre from './Pages/sobre'
import NotFound from './Pages/404'
import Tarefas from './Pages/tarefas'
import Contato from './Pages/contato'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/contato', element: <Contato />},
  {path: '/tarefas', element: <Tarefas />}
])

export default router


import { createBrowserRouter } from "react-router-dom"
import { Cadastro } from "../pages/Cadastro"
import { Contato } from "../pages/Contato"
import { Ficha } from "../pages/Ficha"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Membros } from "../pages/Membros"
import { Sobre } from "../pages/Sobre"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ficha',
    element: <Ficha />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/membros',
    element: <Membros />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
])

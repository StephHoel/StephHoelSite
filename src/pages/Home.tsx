import ItemMenu from '../components/ItemMenu'

import Cadastro from './Cadastro'

import '../index.css'
import Contato from './Contato'
import Ficha from './Ficha'
import Login from './Login'
import Membros from './Membros'
import Sobre from './Sobre'

export default function Home() {
  function Pages() {
    switch (window.location.href.split('=')[1]) {
      case 'cadastro':
        return Cadastro()

      case 'contato':
        return Contato()

      case 'sobre':
        return Sobre()

      case 'login':
        return Login()

      case 'membros':
        return Membros()

      case 'ficha':
        return Ficha()

      default:
        return (
          <article className="w-3/4 text-center mx-auto">
            Este site está sendo criado para mostrar minhas habilidades em
            Desenvolvimento WEB. Neste site terá: HTML, CSS, PHP e MySQL
            inicialmente.
          </article>
        )
    }
  }

  return (
    <div>
      <header className="justify-between flex p-4 items-center font-brush text-7xl text-center w-screen">
        <div className="">Steph Hoel</div>

        <nav className="flex ">
          <ItemMenu
            onclick={() => {
              window.location.href = window.location.href.split(
                'StephHoelSite',
              )[1]
                ? '/StephHoelSite'
                : ''
            }}
          >
            Home
          </ItemMenu>

          <ItemMenu page={'ficha'}>Ficha</ItemMenu>
          <ItemMenu page={'membros'}>Membros</ItemMenu>
          <ItemMenu page={'login'}>Login</ItemMenu>
          <ItemMenu page={'sobre'}>Sobre</ItemMenu>
          <ItemMenu page={'contato'}>Contato</ItemMenu>
        </nav>
      </header>

      <main className="mx-auto items-center flex flex-row bg-[#d3d3d3] w-3/4 rounded-br-3xl rounded-tl-3xl font-old text-3xl text-justify my-3 py-6 px-4">
        {Pages()}
      </main>
    </div>
  )
}

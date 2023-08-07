import '../index.css'
import Cadastro from './Cadastro'
import Contato from './Contato'
import Ficha from './Ficha'
import Login from './Login'
import Membros from './Membros'
import Sobre from './Sobre'

export default function Home() {
  return (
    <div>
      <header className="justify-between flex p-4 ">
        <div className="">Steph Hoel</div>

        <nav className="flex ">
          <div
            onClick={() => {
              window.location.href = window.location.href.split(
                'StephHoelSite',
              )[1]
                ? '/StephHoelSite'
                : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Home
          </div>

          <div
            onClick={() => {
              window.location.href =
                window.location.href.split('=')[1] !== 'ficha'
                  ? '?page=ficha'
                  : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Ficha
          </div>

          <div
            onClick={() => {
              window.location.href =
                window.location.href.split('=')[1] !== 'membros'
                  ? '?page=membros'
                  : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Membros
          </div>

          <div
            onClick={() => {
              window.location.href =
                window.location.href.split('=')[1] !== 'login'
                  ? '?page=login'
                  : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Login
          </div>

          <div
            onClick={() => {
              window.location.href =
                window.location.href.split('=')[1] !== 'sobre'
                  ? '?page=sobre'
                  : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Sobre
          </div>

          <div
            onClick={() => {
              window.location.href =
                window.location.href.split('=')[1] !== 'contato'
                  ? '?page=contato'
                  : ''
            }}
            className="menuSelect cursor-pointer"
          >
            Contato
          </div>
        </nav>
      </header>
      <main className="mx-auto">
        {window.location.href.split('=')[1] === 'cadastro' ? (
          Cadastro()
        ) : window.location.href.split('=')[1] === 'contato' ? (
          Contato()
        ) : window.location.href.split('=')[1] === 'sobre' ? (
          Sobre()
        ) : window.location.href.split('=')[1] === 'login' ? (
          Login()
        ) : window.location.href.split('=')[1] === 'membros' ? (
          Membros()
        ) : window.location.href.split('=')[1] === 'ficha' ? (
          Ficha()
        ) : (
          <article>
            <div className="conteudo">
              Este site está sendo criado para mostrar minhas habilidades em
              Desenvolvimento WEB. Neste site terá: HTML, CSS, PHP e MySQL
              inicialmente.
            </div>
          </article>
        )}
      </main>
    </div>
  )
}

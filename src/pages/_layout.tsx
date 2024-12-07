import type { PropsWithChildren } from "react"
import { ItemMenu } from "../components/ItemMenu"
import '../index.css'
import { routes } from "../lib/routes"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="justify-between flex p-4 items-center font-brush text-7xl text-center w-screen border">
        <div className="">Steph Hoel</div>

        <nav className="flex">
          {routes.map(route => (
            <ItemMenu key={route.name} path={route.path} name={route.name} />
          ))}
        </nav>
      </header>

      <main className="mx-auto items-center flex flex-row bg-[#d3d3d3] w-3/4 rounded-br-3xl rounded-tl-3xl font-old text-3xl text-justify my-3 py-6 px-4">
        {children}
      </main>

      {/* <footer>Footer</footer> */}
    </div>
  )
};

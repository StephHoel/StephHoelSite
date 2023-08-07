import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  page?: string
  onclick?: () => void
}

export default function ItemMenu({ children, page, onclick }: Props) {
  function click() {
    if (onclick) onclick()
    else {
      window.location.href =
        window.location.href.split('=')[1] !== `${page}` ? `?page=${page}` : ''
    }
  }

  return (
    <div
      onClick={click}
      className="cursor-pointer bg-[#d3d3d3] rounded-br-3xl rounded-tl-3xl mr-6 p-3 text-4xl hover:bg-[#808080]"
    >
      {children}
    </div>
  )
}

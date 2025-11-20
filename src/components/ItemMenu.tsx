import Link from 'next/link'

interface Props {
  path: string
  name: string
}

export default function ItemMenu({ path, name }: Props) {
  return (
    <Link
      href={path}
      className="inline-block cursor-pointer bg-[#d3d3d3] rounded-br-3xl rounded-tl-3xl mr-6 p-3 text-4xl hover:bg-[#808080]"
    >
      {name}
    </Link>
  )
}

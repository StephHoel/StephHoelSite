import Link from 'next/link'

interface Props {
  path: string
  name: string
}

export function ItemMenu({ path, name }: Props) {
  return (
    <Link href={path} className="mr-6">
      <div className="cursor-pointer bg-[#d3d3d3] rounded-br-3xl rounded-tl-3xl p-3 text-4xl hover:bg-[#808080]">
        {name}
      </div>
    </Link>
  )
}

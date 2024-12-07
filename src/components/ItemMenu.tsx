interface Props {
  path: string
  name: string
}

export function ItemMenu({ path, name }: Props) {
  return (
    <a href={path}>
      <div
        className="cursor-pointer bg-[#d3d3d3] rounded-br-3xl rounded-tl-3xl mr-6 p-3 text-4xl hover:bg-[#808080]"
      >
        {name}
      </div>
    </a >
  )
}

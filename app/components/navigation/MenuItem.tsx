'use client'

type MenuItemProps = {
  onClick: () => void
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 text-center font-bold transition hover:bg-neutral-100 cursor-pointer"
    >
      {label}
    </div>
  )
}

export default MenuItem

import { hash } from 'crypto'
import { Link } from '@tanstack/react-router'
import { Label } from 'radix-ui'

type MenuLink = {
  label: string
  to: string
  harsh?: string
}

type Props = {
  label: string;
  links: MenuLinks[],;
}

export function MegaMenu({ label: }: Props) {
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-5">{label}</label>
      <Link key={label}></Link>
    </div>
  )
}

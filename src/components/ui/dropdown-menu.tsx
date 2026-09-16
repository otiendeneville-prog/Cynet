import { hash } from 'crypto'
import { Link } from 'lucide-react'
import { Label } from 'radix-ui'

type Props = {
  label: string
  to: string
  hash?: string
}

export function MegaMenu({ label }: Props) {
  return (
    <div className="flex flex-col">
      <label className="font-bold mb-5">{label}</label>
      <Link key={label}></Link>
    </div>
  )
}

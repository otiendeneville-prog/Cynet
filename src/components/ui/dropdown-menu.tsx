import { Link } from 'lucide-react'

type MenuLink = {
  label: string
  to: string
  hash?: string
}

export function MegaMenu({
  label,
  links,
}: {
  label: string
  links: MenuLink[]
}) {
  ;<div className="flex flex-col">
    <label className="font-bold mb-5">{label}</label>
    <Link key={label.Link} to={links.to} hash={hash.link}></Link>
  </div>
}

import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

type MenuLink = {
  label: string
  to: string
  hash?: string
}

type Props = {
  label: string
  links: MenuLink[]
}

export function MegaMenu({ label, links }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const mid = Math.ceil(links.length / 2)
  const columnOne = links.slice(0, mid)
  const columnTwo = links.slice(mid)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          open ? 'text-primary' : 'text-muted-foreground hover:text-primary'
        }`}
      >
        {label}
        <ChevronDown
          className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open ? (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-1/2 top-full z-50 w-screen max-w-4xl -translate-x-1/2 border-t-2 border-t-accent bg-card shadow-elevate"
        >
          <div className="grid grid-cols-1 gap-x-12 px-5 py-8 md:grid-cols-2">
            {[columnOne, columnTwo].map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col">
                {column.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    hash={link.hash}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-base font-semibold text-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

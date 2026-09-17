import { Link } from '@tanstack/react-router'
import { Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/site-data'
import { SiFacebook, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: SiFacebook },
  { name: 'X / Twitter', href: 'https://x.com', icon: SiX },
  // { name: 'LinkedIn', href: 'https://linkedin.com', icon: SiLinkedin },
  { name: 'YouTube', href: 'https://youtube.com', icon: SiYoutube },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a03] text-on-brand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold">{SITE.name}</h3>
          <p className="mt-3 max-w-md text-sm opacity-85">
            High-impact training, research and consultancy for individuals and
            organizations across East Africa.
          </p>
          <div className="mt-5 space-y-2 text-sm opacity-90">
            <p className="flex items-center gap-2">
              <MapPin className="size-4" /> {SITE.address}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4" /> {SITE.email}
            </p>
            <button className="px-4 py-2 bg-[#1a1a03] rounded-[6px] text-[12px] font-bold border-2 border-[#333333] text-[#00A3D3] uppercase tracking-[0.5px]">
              NITA APPROVED
            </button>
            <button className="px-4 py-2 ml-4 bg-[#1a1a03] rounded-[6px] text-[12px] font-bold border-2 border-[#333333] text-[#00A3D3] uppercase tracking-[0.5px]">
              Q&A PROCESSES
            </button>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                to={href}
                preload="intent"
                aria-label={name}
                className="text-gray-400  justify-between transition-all duration-200 hover:text-[#8cc313] hover:scale-110"
                activeProps={{ className: 'text-[#00A3D3]' }}
              >
                <Icon size={22} strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase opacity-80">
            QUICK LINKS
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/training-programs"
                className="opacity-85 hover:opacity-100"
              >
                Training Programs
              </Link>
            </li>
            <li>
              <Link
                to="/training-calendar"
                className="opacity-85 hover:opacity-100"
              >
                Training Calendar
              </Link>
            </li>
            <li>
              <Link to="/about" className="opacity-85 hover:opacity-100">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="opacity-85 hover:opacity-100">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/our-clients" className="opacity-85 hover:opacity-100">
                Our Clients
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="opacity-85 hover:opacity-100">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase opacity-80">
            Follow
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-85 hover:opacity-100"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs opacity-75">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

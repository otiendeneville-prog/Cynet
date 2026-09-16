import { PROGRAMS } from '@/lib/site-data'
import { MegaMenu } from './MegaMenu'

export function ProgramsDropdown() {
  const links = PROGRAMS.map((program) => ({
    label: program.title,
    to: '/training-programs',
    hash: program.slug,
  }))

  return <MegaMenu label="Training Programs" links={links} />
}

export function AboutDropdown() {
  const links = [
    { label: 'About Cynet', to: '/about' },
    { label: 'Our Clients', to: '/about', hash: 'clients' },
    { label: 'Our Team', to: '/about', hash: 'team' },
    { label: 'Portfolio', to: '/about', hash: 'portfolio' },
    { label: 'Team Building', to: '/about', hash: 'team-building' },
  ]

  return <MegaMenu label="About Us" links={links} />
}

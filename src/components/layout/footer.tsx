import Link from 'next/link'

import { DraftingCompassIcon } from 'lucide-react'

import { footerLinks } from '@/config/nav'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

interface LinkListProps {
  title: string
  links: string[]
}

/**
 * Renders a titled list of navigation links.
 */
function LinkList({ title, links }: LinkListProps) {
  return (
    <section className="space-y-3">
      <h4 className="font-semibold">{title}</h4>

      <ul className="space-y-4 font-mono text-muted-foreground">
        {links.map(label => (
          <li key={label}>
            <Link
              href="#"
              className="underline-offset-4 transition-colors hover:text-zinc-300 hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* top of footer */}
      <section className="mx-auto flex max-w-container flex-col items-start gap-4 px-4 pb-8 md:flex-row md:justify-between">
        {/* logo */}
        <article className="space-y-3">
          <span className="flex items-center gap-3">
            <Badge
              variant="default"
              className="z-10 size-10 rounded-xl [&>svg]:size-4"
              asChild
            >
              <DraftingCompassIcon />
            </Badge>
            <h2 className="font-bold font-sans text-3xl">Sketch.ig</h2>
          </span>

          <p className="text-muted-foreground md:max-w-md">
            My personal collection and playground of concepts and ideas. No
            roadmap, just creativity.
          </p>
        </article>

        {/* links nav */}
        <nav className="flex flex-col gap-10 md:flex-row md:gap-0">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <LinkList key={title} title={title} links={links} />
            ))}
          </div>

          {/* changelog section */}
          <section className="space-y-3">
            <h4 className="font-semibold">Changelog</h4>
            <Button
              variant="ghost"
              className="flex items-center gap-2 font-mono"
            >
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
              </span>
              v1.0
            </Button>
          </section>
        </nav>
      </section>

      <Separator className="w-full" />

      {/* bottom of footer */}
      <section className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 px-4 py-8 font-mono text-muted-foreground text-sm md:flex-row">
        <span className="">
          © {year} Sketch.ig — this isn't a product, this is a potential.
        </span>
        <span>made with 💙 by human</span>
      </section>
    </footer>
  )
}

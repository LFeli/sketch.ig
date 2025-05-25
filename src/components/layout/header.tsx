'use client'

import { mainNav } from '@/config/nav'
import { animationItem } from '@/constants/animation'
import { DraftingCompassIcon, MoveUpRightIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export function SiteHeader() {
  return (
    <header className="-translate-x-1/2 fixed top-0 left-1/2 z-50 w-full max-w-container lg:top-4">
      <nav className="relative flex w-full items-center justify-between gap-2.5 overflow-hidden rounded-none bg-background/30 p-2.5 backdrop-blur-[32px] lg:rounded-xl">
        <Link href={'/'}>
          <Badge
            variant={'secondary'}
            className="size-9 rounded-lg text-primary [&>svg]:size-6"
            asChild
          >
            <DraftingCompassIcon />
          </Badge>
        </Link>

        <div>
          <ul className="space-x-4">
            {mainNav.map(item => (
              <li key={item.title} className="inline-block">
                <Link
                  href={item.href ?? '/'}
                  className="text-muted-foreground text-sm transition-colors hover:text-zinc-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <Button type="button" variant={'ghost'} className="text-xs">
              <SearchIcon className="size-3" />
            </Button>

            <Link href={'/'}>
              <Button type="button" variant={'secondary'} className="text-xs">
                Explore
                <MoveUpRightIcon className="size-3" />
              </Button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

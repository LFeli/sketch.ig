'use client'

import { useRouter } from 'next/navigation'

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CircleDashed,
  CornerDownLeftIcon,
  SearchIcon,
} from 'lucide-react'
import React from 'react'

import { navSite } from '@/config/nav'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { Separator } from '../ui/separator'

export function CommandMenu() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)

  /**
   * Sets up a keyboard listener to toggle the open state
   * when the user presses Cmd/Ctrl + K or '/'.
   *
   * Ignores the shortcut if the user is focused on an editable element
   */
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  /**
   * Closes the command palette and runs the provided command.
   *
   * @param command - A function to execute after closing the palette.
   */
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <React.Fragment>
      {/* command trigger */}
      <Button
        type="button"
        variant={'ghost'}
        className="text-xs"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-3" />
      </Button>

      {/* command */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search documentation..."
        description="Search for a command to run..."
      >
        <CommandInput placeholder="Type a command or search" />

        <CommandList className="max-h-[calc(60vh-48px)] overflow-y-auto">
          <CommandEmpty>No results found.</CommandEmpty>

          {navSite.sidebar.map(group => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items?.map(item => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(item.href as string))
                  }}
                  className="data-[selected=true]:bg-primary/80"
                  asChild
                >
                  <span className="flex items-center gap-3">
                    <CircleDashed />
                    {item.title}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>

        <footer className="inset-x-0 bottom-0 z-20 flex h-12 items-center gap-4 rounded-b-xl px-4 py-3 font-medium text-muted-foreground text-xs backdrop-blur-sm backdrop-opacity-80 dark:bg-neutral-800/50">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>

            <span className="font-mono">Go to page</span>
          </div>

          <Separator orientation="vertical" className="ml-2 hidden lg:block" />

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <CommandMenuKbd>
                <ArrowUpIcon />
              </CommandMenuKbd>

              <CommandMenuKbd>
                <ArrowDownIcon />
              </CommandMenuKbd>
            </div>

            <span className="font-mono">Navigate</span>
          </div>
        </footer>
      </CommandDialog>
    </React.Fragment>
  )
}

/**
 * Renders a styled <kbd> element for displaying keyboard shortcuts
 * in the command menu.
 *
 * @param {React.ComponentProps<'kbd'>} props - Props passed to the <kbd> element.
 * @returns {JSX.Element} The styled <kbd> element.
 */
function CommandMenuKbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        'pointer-events-none flex h-5 select-none items-center justify-center gap-1 rounded border bg-background px-1 font-medium font-sans text-[0.7rem] text-muted-foreground [&_svg:not([class*="size-"])]:size-3',
        className
      )}
      {...props}
    />
  )
}

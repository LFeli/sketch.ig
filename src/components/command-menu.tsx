'use client'

import { SearchIcon } from 'lucide-react'
import React from 'react'

import { navSite } from '@/config/nav'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'

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
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search" />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {navSite.sidebar.map((group, index) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items?.map(item => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(item.href as string))
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  )
}

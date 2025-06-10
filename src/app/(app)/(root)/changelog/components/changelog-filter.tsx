'use client'

import { CheckIcon, PlusCircleIcon, SearchIcon, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import React, { type ChangeEvent } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { animationItem } from '@/constants/animation'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { cn } from '@/lib/utils'

interface ChangelogFilterProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>

  tags: string[]
  selectedTags: string[]
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

interface TagsFilterProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export function ChangelogFilter({
  search,
  setSearch,

  tags,
  selectedTags,
  setSelectedTags,
}: ChangelogFilterProps) {
  /**
   * Handles search input changes by updating the search state.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  /**
   * Toggles a tag in the selected tags state.
   * Adds the tag if not present, removes it if already selected.
   *
   * @param {string} tag - The tag to toggle.
   */
  const onTagToggle = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    )
  }

  const handleResetFilters = () => {
    setSearch('')
    setSelectedTags([])
  }

  return (
    <section aria-label="Changelog filters" className="flex items-center gap-4">
      {/* search filter */}
      <motion.div
        variants={animationItem}
        className="relative w-full flex-1 md:max-w-2xs"
      >
        <label htmlFor="changelog-search">
          <span className="sr-only">Search changelog</span>
          <SearchIcon className="absolute top-2.5 left-3 size-4" />
        </label>

        <Input
          id="changelog-search"
          type="search"
          placeholder="Searching in changelog..."
          className="pl-8.5"
          value={search}
          onChange={onSearch}
        />
      </motion.div>

      {/* version filter */}
      <motion.div variants={animationItem}>
        <TagsFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagToggle={onTagToggle}
        />
      </motion.div>

      {(search || selectedTags.length > 0) && (
        <Button
          variant="secondary"
          size="sm"
          className="h-9"
          onClick={handleResetFilters}
        >
          <XIcon className="mr-1 size-3" />
          Clear filters
        </Button>
      )}
    </section>
  )
}

/**
 * TagsFilter component allows filtering by multiple tags.
 * On mobile, it uses a Drawer interface with temporary state for tag selection.
 * On desktop, it uses a Popover (placeholder implementation shown).
 */
function TagsFilter({ tags, selectedTags, onTagToggle }: TagsFilterProps) {
  const isMobile = useIsMobile()

  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [tempSelectedTags, setTempSelectedTags] = React.useState<string[]>([])

  const toggleTag = (tag: string) => onTagToggle(tag)

  /**
   * Syncs temporary selected tags with the current selection
   * when the drawer is opened.
   */
  React.useEffect(() => {
    if (drawerOpen) {
      setTempSelectedTags(selectedTags)
    }
  }, [drawerOpen, selectedTags])

  if (isMobile) {
    /**
     * Toggles a tag in the temporary selected tags state.
     * Adds the tag if not present, removes it if already selected.
     */
    const toggleTempTag = (tag: string) => {
      setTempSelectedTags(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
      )
    }

    /**
     * Applies temporary tag selections by toggling added or removed tags,
     * and closes the drawer after applying.
     */
    const applyTags = () => {
      const toAdd = tempSelectedTags.filter(tag => !selectedTags.includes(tag))
      const toRemove = selectedTags.filter(
        tag => !tempSelectedTags.includes(tag)
      )

      for (const tag of toAdd) {
        onTagToggle(tag)
      }

      for (const tag of toRemove) {
        onTagToggle(tag)
      }

      setDrawerOpen(false)
    }

    /**
     * Clears all selected tags by toggling each off,
     * resets temporary selection, and closes the drawer.
     */
    const resetTags = () => {
      for (const tag of selectedTags) {
        onTagToggle(tag)
      }

      setTempSelectedTags([])
      setDrawerOpen(false)
    }

    return (
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button variant={'outline'} className="border-dashed">
            <PlusCircleIcon className="size-4" />
            Tags
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filter by Tags</DrawerTitle>
            <DrawerDescription>
              Select one or more tags to narrow down the results. Items matching
              all selected tags will be displayed.
            </DrawerDescription>
          </DrawerHeader>

          <section className="px-4">a</section>

          <DrawerFooter className="flex flex-col gap-3">
            <DrawerClose asChild>
              <Button variant={'secondary'} className="w-full">
                Cancel
              </Button>
            </DrawerClose>

            <Button className="w-full" onClick={applyTags}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'} className="border-dashed">
          <PlusCircleIcon className="size-4" />
          Tags
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" sideOffset={4} className="w-xs p-0">
        <Card className="gap-0 border-0 py-4 pb-0">
          <div>
            <CardHeader className="px-4 pb-4">
              <CardTitle>Filter by Tags</CardTitle>
              <CardDescription>
                Select one or more tags to narrow down the results. Items
                matching all selected tags will be displayed.
              </CardDescription>
            </CardHeader>

            <Separator className="w-full" />
          </div>

          <CardContent className="px-0">
            <Command>
              <CommandInput placeholder="Search tags..." />

              <CommandList className="max-h-52">
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  {tags.map(tag => {
                    const isSelected = selectedTags.includes(tag)

                    return (
                      <CommandItem key={tag} onSelect={() => toggleTag(tag)}>
                        <div
                          className={cn(
                            'flex size-4 items-center justify-center rounded-[4px] border',
                            isSelected
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-input [&_svg]:invisible'
                          )}
                        >
                          <CheckIcon className="size-3.5 text-primary-foreground" />
                        </div>

                        <span>{tag}</span>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

'use client'

import { LogsIcon, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import React, { type ChangeEvent } from 'react'

import { Badge } from '@/components/ui/badge'

import { animationContainer, animationItem } from '@/constants/animation'
import { changelogEntires } from '@/mock/changelog'
import type { ChangelogEntry } from '@/types/changelog'

import { Button } from '@/components/ui/button'
import { ChangelogFilter } from './changelog-filter'
import { ChangelogList } from './changelog-list'

/**
 * Filters a list of changelog entries based on version, tags, and a search term.
 *
 * @param {ChangelogEntry[]} entries - The list of changelog entries to filter.
 * @param {string[]} tags - An array of tags that must all be present in the entry.
 * @param {string} search - A search term to match against entry titles and descriptions.
 * @returns {ChangelogEntry[]} The filtered list of changelog entries.
 */
function filterEntries(
  entries: ChangelogEntry[],
  tags: string[],
  search: string
) {
  const searchTerm = search.toLowerCase()

  return entries.filter(entry => {
    const matchesTags =
      tags.length === 0 || tags.every(tag => entry.tags.includes(tag))

    const matchesSearch =
      !search ||
      entry.title.toLowerCase().includes(searchTerm) ||
      entry.description.toLowerCase().includes(searchTerm)

    return matchesTags && matchesSearch
  })
}

export function ChangeLogs() {
  const [search, setSearch] = React.useState('')
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])

  const entries = changelogEntires

  /**
   * A memoized, sorted array of unique version strings extracted from `entries`.
   * Versions are sorted in descending lexicographical order.
   *
   * @type {string[]}
   */
  const versions = React.useMemo(
    () =>
      Array.from(new Set(entries.map(e => e.version))).sort((a, b) =>
        b.localeCompare(a)
      ),
    [entries]
  )

  /**
   * A memoized, sorted array of unique tags extracted from `entries`.
   *
   * @type {string[]}
   */
  const tags = React.useMemo(
    () => Array.from(new Set(entries.flatMap(e => e.tags))).sort(),
    [entries]
  )

  /**
   * Memoized filtered changelog entries based on selected version, tags, and search term.
   *
   * @type {ChangelogEntry[]}
   */
  const filtered = React.useMemo(
    () => filterEntries(entries, selectedTags, search),
    [entries, selectedTags, search]
  )

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

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationContainer}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-between space-y-4 overflow-hidden px-4 py-16 lg:py-24">
        <header className="flex flex-col items-center justify-center space-y-6">
          {/* tag badge */}
          <Badge
            variant={'secondary'}
            className="gap-2 rounded-full px-3 py-1.25 font-mono"
            asChild
          >
            <motion.span variants={animationItem}>
              release notes
              <LogsIcon />
            </motion.span>
          </Badge>

          <motion.h2
            variants={animationItem}
            className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-center font-bold font-sans text-3xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-6xl dark:from-neutral-600 dark:to-white"
          >
            Version by Vibe
          </motion.h2>

          <motion.p
            variants={animationItem}
            className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400"
          >
            No strict versions here — just iterations born from curiosity. Every
            tweak, polish, or pivot lands here, tracing the rhythm of my
            creative flow with Sketch.ig.
          </motion.p>
        </header>

        <div className="w-full max-w-container space-y-6">
          <ChangelogFilter
            search={search}
            onSearch={onSearch}
            tags={tags}
            selectedTags={selectedTags}
            onTagToggle={onTagToggle}
          />

          <ChangelogList entries={filtered} search={search} />
        </div>

        <footer className="mx-auto max-w-xl pt-8 text-center font-mono text-neutral-700 text-xs lg:text-sm dark:text-neutral-400">
          Everything here is a snapshot, not the final frame.
        </footer>
      </section>
    </motion.div>
  )
}

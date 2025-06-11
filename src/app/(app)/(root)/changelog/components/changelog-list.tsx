import { motion } from 'motion/react'

import type { ChangelogEntry } from '@/types/changelog'

interface ChangelogListProps {
  entries: ChangelogEntry[]
  search: string
}

/**
 * Animation variant for fading in a group of elements with staggered children.
 */
const fadeGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
}

/**
 * Animation variant for revealing a single entry with a fade + upward motion.
 */
const entryReveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Groups changelog entries by their date property.
 *
 * @param {ChangelogEntry[]} entries - Array of changelog entries to group.
 * @returns {Record<string, ChangelogEntry[]>} An object mapping dates to arrays of entries.
 */
function groupByDate(entries: ChangelogEntry[]) {
  return entries.reduce(
    (acc, entry) => {
      acc[entry.date] = acc[entry.date] || []
      acc[entry.date].push(entry)
      return acc
    },
    {} as Record<string, ChangelogEntry[]>
  )
}

export function ChangelogList({ entries, search }: ChangelogListProps) {
  /**
   * Groups entries by their date.
   * @type {Record<string, ChangelogEntry[]>}
   */
  const grouped = groupByDate(entries)

  /**
   * A key string combining the search term and the serialized list of grouped dates.
   * Useful as a cache or dependency key.
   * @type {string}
   */
  const filterKey = search + JSON.stringify(Object.keys(grouped))

  if (entries.length === 0) {
    return (
      <ul>
        <li className="text-center text-gray-500">No matching entries</li>
      </ul>
    )
  }

  return (
    <motion.div
      key={filterKey}
      variants={fadeGroup}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-8"
    >
      {Object.entries(grouped).map(([date, group]) => (
        <motion.section
          key={date}
          className="grid grid-cols-1 gap-4 md:grid-cols-5"
          variants={entryReveal}
        >
          <span className="col-span-1 font-mono text-gray-600 text-sm">
            {date}
          </span>
          <div className="col-span-4 space-y-4">
            {group.map(entry => (
              <motion.div key={entry.id}>changelog item here.</motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  )
}

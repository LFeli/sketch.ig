import {
  AlertTriangle,
  Bug,
  type LucideIcon,
  Sparkles,
  Tag,
  Wrench,
} from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import { entryReveal, fadeGroup } from '@/constants/animation'
import type { ChangelogEntry } from '@/types/changelog'
import { HighlightedText } from '@/utils/highlighted-text'

interface ChangelogListProps {
  entries: ChangelogEntry[]
  search: string
}

/**
 * Maps changelog entry types to their corresponding Lucide icon components.
 */
const typeIconMap: Record<ChangelogEntry['type'], LucideIcon> = {
  feature: Sparkles,
  fix: Bug,
  update: Wrench,
  breaking: AlertTriangle,
}

/**
 * Maps changelog entry types to corresponding text color CSS classes.
 */
const typeColorMap: Record<ChangelogEntry['type'], string> = {
  feature: 'text-yellow-500',
  fix: 'text-red-500',
  update: 'text-blue-500',
  breaking: 'text-orange-600',
}

/**
 * Groups changelog entries by their date property and sorts them in descending order.
 *
 * @param {ChangelogEntry[]} entries - Array of changelog entries to group.
 * @returns {Record<string, ChangelogEntry[]>} An object mapping dates to arrays of entries, sorted by date DESC.
 */
function groupByDate(
  entries: ChangelogEntry[]
): Record<string, ChangelogEntry[]> {
  const grouped = entries.reduce(
    (acc, entry) => {
      acc[entry.date] = acc[entry.date] || []
      acc[entry.date].push(entry)
      return acc
    },
    {} as Record<string, ChangelogEntry[]>
  )

  const sortedEntries: Record<string, ChangelogEntry[]> = {}
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  )

  for (const date of sortedDates) {
    sortedEntries[date] = grouped[date]
  }

  return sortedEntries
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
          className="flex flex-col gap-8 md:flex-row"
          variants={entryReveal}
        >
          <Badge
            variant={'secondary'}
            className="col-span-1 h-fit px-2 py-1 font-mono text-muted-foreground text-sm"
          >
            {date}
          </Badge>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {group.map(entry => {
              const Icon = typeIconMap[entry.type]
              const colorClass = typeColorMap[entry.type]

              return (
                <Card
                  key={entry.id}
                  className="rounded-2xl border border-border shadow-sm"
                >
                  <CardContent className="space-y-2 px-4 py-2">
                    <header className="flex items-center justify-between">
                      <time
                        className="font-mono text-muted-foreground text-xs"
                        dateTime={`v${entry.version}`}
                        aria-label={`Version ${entry.version}`}
                      >
                        v{entry.version}
                      </time>

                      <Icon className={`size-4 ${colorClass}`} />
                    </header>

                    <h3 className="font-semibold text-base">
                      {HighlightedText({ text: entry.title, search })}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {HighlightedText({ text: entry.description, search })}
                    </p>

                    <footer
                      className="flex flex-wrap gap-2 pt-2"
                      aria-label="Tags"
                    >
                      {entry.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="flex items-center gap-1 text-xs"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </footer>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.section>
      ))}
    </motion.div>
  )
}

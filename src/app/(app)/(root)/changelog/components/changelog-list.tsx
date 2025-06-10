import type { ChangelogEntry } from '@/types/changelog'

interface ChangelogListProps {
  entries: ChangelogEntry[]
  search: string
}

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
  if (entries.length === 0) {
    return (
      <ul>
        <li className="text-center text-gray-500">No matching entries</li>
      </ul>
    )
  }

  const grouped = groupByDate(entries)

  return Object.entries(grouped).map(([date, group], index) => (
    <section key={date} className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <span className="col-span-1">{date}</span>a
    </section>
  ))
}

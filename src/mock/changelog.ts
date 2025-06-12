import type { ChangelogEntry } from '@/types/changelog'

export const changelogEntries: ChangelogEntry[] = [
  {
    id: '1',
    version: '2.1.0',
    date: '2025-06-01',
    title: 'Added search filter functionality',
    description:
      'Users can now search the changelog by keywords in titles and descriptions.',
    tags: ['search', 'filter'],
    type: 'feature',
  },
  {
    id: '2',
    version: '2.1.0',
    date: '2025-06-01',
    title: 'Improved version dropdown',
    description: 'Version filter now includes sorting by most recent versions.',
    tags: ['version', 'ui'],
    type: 'update',
  },
  {
    id: '3',
    version: '2.0.0',
    date: '2025-05-20',
    title: 'Initial release of changelog component',
    description:
      'Basic changelog list with version, date, title, and description.',
    tags: ['initial', 'core'],
    type: 'feature',
  },
  {
    id: '4',
    version: '2.2.0',
    date: '2025-06-05',
    title: 'Added tag-based filtering',
    description: 'Users can now filter entries by selecting multiple tags.',
    tags: ['filter', 'tags'],
    type: 'feature',
  },
  {
    id: '5',
    version: '2.2.0',
    date: '2025-06-05',
    title: 'Highlight search matches',
    description: 'Search terms are highlighted in titles and descriptions.',
    tags: ['search', 'highlight'],
    type: 'feature',
  },
  {
    id: '6',
    version: '2.0.1',
    date: '2025-05-22',
    title: 'Fixed layout issues',
    description: 'Resolved overflow problems in mobile view.',
    tags: ['bugfix', 'responsive'],
    type: 'fix',
  },
]

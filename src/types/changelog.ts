export interface ChangelogEntry {
  id: string
  version: string
  date: string
  title: string
  description: string
  tags: string[]
  type: 'feature' | 'fix' | 'update' | 'breaking'
}

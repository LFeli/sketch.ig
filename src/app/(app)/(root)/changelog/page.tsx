import { ChangelogCallToAction } from './components/call-to-action'
import { ChangeLogs } from './components/changelogs'

export default function ChangelogPage() {
  return (
    <main className="h-full">
      <ChangelogCallToAction />
      <ChangeLogs />
    </main>
  )
}

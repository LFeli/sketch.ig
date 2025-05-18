import { CallToAction } from './components/call-to-action'
import { Features } from './components/features'
import { Showcase } from './components/show-case'

export default function HomePage() {
  return (
    <main className="h-full">
      <CallToAction />
      <Features />
      <Showcase />
    </main>
  )
}

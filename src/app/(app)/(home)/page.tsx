import { BackgroundLines } from '@/components/background-lines'

export default function HomePage() {
  return (
    <main>
      <BackgroundLines className="flex w-full flex-col items-center justify-center bg-red-200 px-4">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-bold font-sans text-2xl text-transparent tracking-tight md:py-10 md:text-4xl lg:text-7xl dark:from-neutral-600 dark:to-white">
          My Space to <br /> Break & Build
        </h2>
        <p className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400">
          From tiny components to full flows—this is where I explore ideas
          without limits. Sketch.ig is messy, iterative, and just for me (but
          feel free to look around)
        </p>
      </BackgroundLines>

      <section>aaaa</section>
    </main>
  )
}

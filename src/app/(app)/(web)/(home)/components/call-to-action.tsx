import { BackgroundLines } from '@/components/background-lines'
import { FlipWords } from '@/components/flip-words'

/**
 * A list of phrase pairs to be animated in sequence.
 */
const flipWords = [
  'Learn & Apply',
  'Think & Code',
  'Design & Iterate',
  'Break & Build',
  'Write & Refactor',
]

/**
 * Inline style object for a radial background gradient.
 */
const gradientStyle = {
  background: 'radial-gradient(50% 68% at 50% 100%, #171717, #ababab00)',
}

export function CallToAction() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <BackgroundLines
        svgOptions={{ duration: 5 }}
        className="flex w-full flex-col items-center justify-center bg-red-200 px-4"
      >
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-4 text-center font-bold font-sans text-4xl text-transparent leading-tight tracking-tight md:text-5xl lg:text-7xl dark:from-neutral-600 dark:to-white">
          My Space to <br />
          <FlipWords words={flipWords} duration={2000} />
        </h2>

        <p className="mx-auto max-w-xl text-center text-neutral-700 text-sm md:text-lg dark:text-neutral-400">
          From tiny components to full flows—this is where I explore ideas
          without limits. Sketch.ig is messy, iterative, and just for me (but
          feel free to look around).
        </p>
      </BackgroundLines>

      {/* Decorative background element with a radial gradient. */}
      <div
        className="-translate-x-1/2 absolute bottom-0 left-1/2 z-auto h-[307px] w-full max-w-[1800px] flex-none overflow-hidden"
        style={gradientStyle}
      />
    </section>
  )
}

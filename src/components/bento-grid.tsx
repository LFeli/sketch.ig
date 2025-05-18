import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

interface BentoGridItemProps {
  itemId?: number
  title: string
  description: string
  header: React.ReactNode
  icon: LucideIcon
  className?: string
}

function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

function BentoGridItem({
  title,
  description,
  header,
  icon: Icon,
  className,
}: BentoGridItemProps) {
  return (
    <motion.article
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
    >
      {header}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <Icon />

        <div className="mt-2 mb-2 font-bold font-sans text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-normal font-sans text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </motion.article>
  )
}

export { BentoGrid, BentoGridItem }

import {
  ClipboardIcon,
  FileIcon,
  SignatureIcon,
  TableColumnsSplitIcon,
} from 'lucide-react'
import { motion } from 'motion/react'

import { BentoGrid } from '@/components/bento-grid'

import { animationItem } from '@/constants/animation'
import { cn } from '@/lib/utils'

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-dot-black/[0.2] bg-secondary" />
)
const items = [
  {
    title: 'The Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: ClipboardIcon,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: FileIcon,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: SignatureIcon,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: TableColumnsSplitIcon,
  },
]

export function ShowCaseBento() {
  return (
    <section>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {items.map((item, index) => (
          <motion.article
            key={index}
            variants={animationItem}
            transition={{ delay: index * 0.175, duration: 0.3 }}
            className={cn(
              'group/bento group/bento row-span-1 flex flex-col justify-between space-y-6 rounded-xl bg-[#121212] p-4',
              item.className
            )}
          >
            <header className="relative w-full flex-1">
              <div className="absolute flex h-full w-full flex-nowrap items-start justify-start overflow-hidden p-0 [--webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [--webkit-mask-repeat:no-repeat] [--webkit-mask-size:100%_100%] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%]">
                {item.header}
              </div>
            </header>

            <div className="transition duration-200 group-hover/bento:translate-x-2">
              <h4 className="mt-2 mb-2 font-bold font-mono text-neutral-600 dark:text-neutral-200">
                {item.title}
              </h4>

              <p className="font-normal font-sans text-neutral-600 text-xs dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </BentoGrid>
    </section>
  )
}

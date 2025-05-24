import { auroraBackgroundStyle, auroraVariables } from '@/constants/background'
import { cn } from '@/lib/utils'

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showRadialGradient?: boolean
  auroraStyle?: React.CSSProperties
  auroraClassName?: string | string[]
}

/**
 * A container rendering an animated aurora background with optional radial gradient masking.
 * Allows customization of styles and classes applied to the aurora effect container.
 *
 * @param {AuroraBackgroundProps} props - Component props.
 * @returns {JSX.Element} The aurora background wrapper with children.
 */
export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
  auroraStyle = auroraVariables,
  auroraClassName = auroraBackgroundStyle,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        'relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 transition-bg dark:bg-zinc-900',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden" style={auroraStyle}>
        <div
          className={cn(auroraClassName, {
            '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]':
              showRadialGradient,
          })}
        />
      </div>
      {children}
    </div>
  )
}

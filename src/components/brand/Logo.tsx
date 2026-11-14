import { cn } from '../../lib/cn'

type LogoProps = {
  width?: number
  className?: string
  widthClassName?: string
}

export function Logo({ width = 200, className, widthClassName }: LogoProps) {
  return (
    <img
      src="/images/logo-dark.png"
      alt="Natália Brito — psiquiatria"
      width={width}
      height={Math.round((width * 339) / 909)}
      className={cn('h-auto', widthClassName, className)}
      style={widthClassName ? undefined : { width }}
    />
  )
}

import { SiteFooter } from '@/components/layout/footer'
import { SiteHeader } from '@/components/layout/header'

interface WebLayoutProps {
  children: React.ReactNode
}

export default function WebLayout({ children }: WebLayoutProps) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

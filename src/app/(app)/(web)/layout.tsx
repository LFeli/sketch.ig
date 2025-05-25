import { SiteFooter } from '@/components/layout/footer'

interface WebLayoutProps {
  children: React.ReactNode
}

export default function WebLayout({ children }: WebLayoutProps) {
  return (
    <div>
      {children}
      <SiteFooter />
    </div>
  )
}

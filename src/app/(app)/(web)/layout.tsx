interface WebLayoutProps {
  children: React.ReactNode
}

export default function WebLayout({ children }: WebLayoutProps) {
  return <div>{children}</div>
}

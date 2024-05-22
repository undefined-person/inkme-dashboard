import { ReactNode } from 'react'

import { Header } from '@/shared/ui/header'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

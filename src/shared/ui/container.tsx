import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <section className="container px-8 pb-8 mx-auto mt-4 max-md:px-4">{children}</section>
}

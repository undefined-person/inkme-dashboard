import { ReactNode } from 'react'
import { Dialog, DialogContent } from './dialog'
import { cn } from '../lib/cn'

export const Modal = ({
  children,
  isOpen,
  onOpenChange,
  className,
}: {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
  className?: string
}) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent
        className={cn(
          'max-h-screen max-md:overflow-y-scroll md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl',
          className
        )}>
        {children}
      </DialogContent>
    </Dialog>
  )
}

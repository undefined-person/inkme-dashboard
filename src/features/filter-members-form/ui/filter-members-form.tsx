import { memo, useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon, Filter } from 'lucide-react'

import { useFilterMembers } from '../model/use-filter-members'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { Calendar } from '@/shared/ui/calendar'
import { cn } from '@/shared/lib/cn'
import { MemberStatusEnum } from '@/shared/types/member.type'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { Modal } from '@/shared/ui/modal'

const memberStatusOptions = {
  [MemberStatusEnum.REGISTRATION_REQUEST_APPROVED]: 'Registration Request Approved',
  [MemberStatusEnum.APPROVED]: 'Approved',
  [MemberStatusEnum.WAITING_FOR_AGREEMENT_APPROVE]: 'Waiting For Agreement Approve',
  [MemberStatusEnum.WAITING_FOR_REGISTRATION_APPROVE]: 'Waiting For Registration Approve',
  [MemberStatusEnum.REJECTED]: 'Rejected',
}

export function DesktopMembersForm({ form, onSubmit, reset }: { form: any; onSubmit: any; reset: any }) {
  return (
    <section className="sticky top-0 z-10 hidden w-full py-4 shadow-md bg-slate-50 lg:block">
      <Form {...form}>
        <form onSubmit={onSubmit} className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username747"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contractNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contract Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        {field.value ? <SelectValue placeholder="Select a status" /> : 'Select a status'}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(memberStatusOptions).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bankDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Details</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="createAt"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Created At</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(' pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center w-full gap-4 mt-4">
            <Button className="w-full" variant="destructive" type="button" onClick={() => reset()}>
              Reset
            </Button>
            <Button className="w-full" type="submit">
              Filter
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}

export function MobileFiltersForm({ form, onSubmit, reset }: { form: any; onSubmit: any; reset: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const onChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false)
    }
  }

  return (
    <div className="lg:hidden">
      <Modal isOpen={isOpen} onOpenChange={onChange}>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username747"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contractNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          {field.value ? <SelectValue placeholder="Select a status" /> : 'Select a status'}
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(memberStatusOptions).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bankDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Details</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="createAt"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Created At</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(' pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center w-full gap-4 mt-4">
              <Button className="w-full" variant="destructive" type="button" onClick={() => reset()}>
                Reset
              </Button>
              <Button className="w-full" type="submit">
                Filter
              </Button>
            </div>
          </form>
        </Form>
      </Modal>
      <Button className="fixed z-10 bottom-4 right-4" onClick={() => setIsOpen(true)}>
        <Filter className="w-5 h-5" />
      </Button>
    </div>
  )
}

export const FilterMembersForm = memo(
  ({
    refetch,
  }: {
    refetch: (variables: {
      status?: string
      firstName?: string
      lastName?: string
      username747?: string
      contractNumber?: string
      bankDetails?: string
      createAt?: string
      orderBy?: string
      orderDirection?: 'ASC' | 'DESC'
    }) => void
  }) => {
    const { form, onSubmit, reset } = useFilterMembers({ refetch })

    return (
      <>
        <DesktopMembersForm form={form} onSubmit={onSubmit} reset={reset} />
        <MobileFiltersForm form={form} onSubmit={onSubmit} reset={reset} />
      </>
    )
  }
)

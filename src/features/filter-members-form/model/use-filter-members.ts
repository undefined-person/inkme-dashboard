import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { MemberStatusEnum } from '@/shared/types/member.type'

const filterMembersSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username747: z.string().optional(),
  contractNumber: z.string().optional(),
  status: z.nativeEnum(MemberStatusEnum).optional(),
  bankDetails: z.string().optional(),
  createAt: z.date().optional().or(z.literal('')),
  // orderBy: z.string().optional(),
  // orderDirection: z.string().optional(),
})

const defaultValues = {
  firstName: '',
  lastName: '',
  username747: '',
  contractNumber: '',
  status: undefined,
  bankDetails: '',
  createAt: '',
}

export const useFilterMembers = ({
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
  const form = useForm({
    resolver: zodResolver(filterMembersSchema),
    defaultValues,
  })

  const onSubmit = form.handleSubmit((data) => {
    refetch(data)
  })

  const reset = () => {
    form.reset(defaultValues)
    refetch({})
  }

  return {
    form,
    onSubmit,
    reset,
  }
}

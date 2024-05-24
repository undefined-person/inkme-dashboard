import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { MemberStatusEnum } from '@/shared/types/member.type'

const filterMembersSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(255, 'First name must be at most 255 characters')
    .optional()
    .or(z.literal('')),
  lastName: z
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(255, 'Last name must be at most 255 characters')
    .optional()
    .or(z.literal('')),
  username747: z
    .string()
    .min(3, 'Username747 must be at least 3 characters')
    .max(255, 'Username747 must be at most 255 characters')
    .optional()
    .or(z.literal('')),
  contractNumber: z
    .string()
    .min(8, 'Contact number must be a 8 digit number')
    .max(8, 'Contact number must be a 8 digit number')
    .optional()
    .or(z.literal('')),
  status: z.nativeEnum(MemberStatusEnum).optional(),
  bankDetails: z.string().optional().or(z.literal('')),
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

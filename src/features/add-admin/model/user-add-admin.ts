import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'
import { AxiosError } from 'axios'

import { authControllerAddAdmin } from '@/shared/api/api'
import { useToast } from '@/shared/hooks/use-toast'
import { ErrorResponse } from '@/shared/types/error.types'

const addAdminSchema = z.object({
  username: z.string().min(2, 'Must be at least 2 characters').max(50, 'Must contain at most 50 character(s)'),
  password: z.string().min(6, 'Must be at least 6 characters').max(50, 'Must contain at most 50 character(s)'),
  email: z.string().email('Invalid email'),
  phoneNumber: z.string().min(10, 'Must be at least 10 characters').max(15, 'Must contain at most 15 character(s)'),
})

export const useAddAdmin = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof addAdminSchema>>({
    resolver: zodResolver(addAdminSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      phoneNumber: '',
    },
  })

  const addAdminMutation = useMutation({
    mutationFn: authControllerAddAdmin,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Admin added successfully',
      })
      form.reset()
    },
    onError: (error: AxiosError) => {
      toast({
        title: 'Error',
        description: (error.response as ErrorResponse)?.data?.message || 'Something went wrong',
      })
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    addAdminMutation.mutate(data)
  })

  return {
    form,
    onSubmit,
    isLoading: addAdminMutation.isPending,
  }
}

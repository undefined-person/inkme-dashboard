import { useMutation } from '@tanstack/react-query'

import { managementControllerApproveRegistration } from '@/shared/api/api'
import { useToast } from '@/shared/hooks/use-toast'

export const useApproveRegistration = (memberId: number, refetch: () => void) => {
  const { toast } = useToast()

  const { mutate, isPending } = useMutation({
    mutationFn: managementControllerApproveRegistration,
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
      })
    },
    onSuccess: () => {
      refetch()
    },
  })

  return {
    approveRegistration: () => mutate(memberId),
    isPending,
  }
}

import { useMutation } from '@tanstack/react-query'

import { managementControllerApproveAgreement } from '@/shared/api/api'
import { useToast } from '@/shared/hooks/use-toast'

export const useApproveAgreement = (memberId: number, refetch: () => void) => {
  const { toast } = useToast()

  const { mutate, isPending } = useMutation({
    mutationFn: managementControllerApproveAgreement,
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
    approveAgreement: () => mutate(memberId),
    isPending,
  }
}

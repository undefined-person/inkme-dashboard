import { useMutation } from '@tanstack/react-query'

import { managementControllerReject } from '@/shared/api/api'
import { useToast } from '@/shared/hooks/use-toast'

export const useRejectMember = (memberId: number) => {
  const { toast } = useToast()

  const { mutate, isPending } = useMutation({
    mutationFn: managementControllerReject,
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
      })
    },
    onSuccess: () => {
      window.location.reload()
    },
  })

  return {
    rejectMember: () => mutate(memberId),
    isPending,
  }
}

import { Link } from 'react-router-dom'

import { useGetMember } from '../model/use-get-member'
import { PageLoader } from '@/shared/ui/page-loader'
import { formatMemberStatus } from '@/shared/lib/format-member-status'
import { Badge } from '@/shared/ui/badge'

export function MemberView({ userId }: { userId: number }) {
  const { data, error, loading } = useGetMember({ id: userId })

  if (loading || !data) return <PageLoader />

  if (error) return <div>Error: {error.message}</div>

  return (
    <section className="mt-4">
      <div className="flex items-center gap-4 text-3xl font-bold">
        <h2>
          {data.firstName} {data.lastName}
        </h2>
        <span className="text-slate-400">{data.username747}</span>
        <Badge className="ml-auto">{formatMemberStatus(data.status)}</Badge>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <h3 className="text-lg font-bold">Contract number</h3>
          <p>{data.contractNumber}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Facebook URL</h3>
          <Link to={data.facebookUrl} target="_blank" rel="noreferrer" className="underline">
            {data.facebookUrl}
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-bold">Bank details</h3>
          <p>{data.bankDetails}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">ID document front side photo</h3>
          <img src={data.idDocumentFronSidePhotoUrl} alt="ID document front side" />
        </div>
        <div>
          <h3 className="text-lg font-bold">ID document back side photo</h3>
          <img src={data.idDocumentBackSidePhotoUrl} alt="ID document back side" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Signature</h3>
          <img src={data.signatureUrl} alt="Signature" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Agreement</h3>
          <img src={data.agreementUrl} alt="Agreement" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Health declaration</h3>
          <p>
            {data.healthDeclaration.doesNotHaveBloodDisorders ? 'Does not have blood disorders' : 'Has blood disorders'}
          </p>
        </div>
      </div>
    </section>
  )
}

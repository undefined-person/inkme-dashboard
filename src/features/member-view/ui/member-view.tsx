import { Link } from 'react-router-dom'

import { useGetMember } from '../model/use-get-member'
import { PageLoader } from '@/shared/ui/page-loader'
import { formatMemberStatus, getBadgeColor } from '@/shared/lib/format-member-status'
import { Badge } from '@/shared/ui/badge'
import { Separator } from '@/shared/ui/separator'
import { cn } from '@/shared/lib/cn'

export function MemberView({ userId }: { userId: number }) {
  const { data, error, loading } = useGetMember({ id: userId })

  if (loading || !data) return <PageLoader />

  if (error) return <div>Error: {error.message}</div>

  return (
    <section className="mt-4">
      <div className="flex items-center gap-4 text-3xl font-bold max-md:text-xl">
        <h2>
          {data.firstName} {data.lastName}
        </h2>
        <span className="text-slate-400">{data.username747}</span>
        <Badge className={cn(getBadgeColor(data.status), 'ml-auto')}>{formatMemberStatus(data.status)}</Badge>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 max-md:grid-cols-1">
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
          <h3 className="text-lg font-bold">Health declaration</h3>
          <ul className="list-disc list-inside">
            <li>
              {data.healthDeclaration.doesNotHaveBloodDisorders
                ? 'Does not have blood disorders'
                : 'Has blood disorders'}
            </li>
            <li>{data.healthDeclaration.doesNotHaveSkinDisease ? 'Does not have skin disease' : 'Has skin disease'}</li>
            <li>{data.healthDeclaration.isNotDiabetic ? 'Is not diabetic' : 'Is diabetic'}</li>
            <li>{data.healthDeclaration.isNotPregnant ? 'Is not pregnant' : 'Is pregnant'}</li>
            <li>
              {data.healthDeclaration.isNotUnderTreatmentOrMedications
                ? 'Is not under treatment or medications'
                : 'Is under treatment or medications'}
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">ID document front side photo</h3>
          <img
            className="rounded-md shadow-md max-lg:w-full"
            width={640}
            height={480}
            src={data.idDocumentFronSidePhotoUrl}
            alt="ID document front side"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">ID document back side photo</h3>
          <img
            className="rounded-md shadow-md max-lg:w-full"
            width={640}
            height={480}
            src={data.idDocumentBackSidePhotoUrl}
            alt="ID document back side"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">Signature</h3>
          <img
            className="rounded-md shadow-md max-lg:w-full"
            width={640}
            height={480}
            src={data.signatureUrl}
            alt="Signature"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">Agreement</h3>
          <img
            className="rounded-md shadow-md max-lg:w-full"
            width={640}
            height={480}
            src={data.agreementUrl}
            alt="Agreement"
          />
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <h3 className="text-lg font-bold">Attachments</h3>
        {data.attachments.length > 0 && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {data.attachments.map((attachment: { createAt: string; id: number; url: string }) => (
              <div key={attachment.id}>
                <img
                  className="rounded-md shadow-md max-lg:w-full"
                  width={640}
                  height={480}
                  src={attachment.url}
                  alt="Attachment"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

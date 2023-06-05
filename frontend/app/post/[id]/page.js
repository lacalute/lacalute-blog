'use client'
import { useParams } from 'next/navigation'
import { Page } from '../../../components/Page/page_post'

export default function Post() {
  const { id } = useParams()
  return <Page ide={id} />
}

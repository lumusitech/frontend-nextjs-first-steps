import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing page',
  description: 'This is the pricing page',
  keywords: ['pricing page', 'Lumusitech', 'precios'],
}

export default function PricingPage() {
  return <span className='text-5xl'>Pricing page</span>
}

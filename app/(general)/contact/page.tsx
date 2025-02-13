import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'This is the Contact page',
  keywords: ['contact page', 'Lumusitech', 'contacto'],
}

export default function ContactPage() {
  return <span className='text-5xl'>Contact page</span>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'This is the About page',
  keywords: ['about page', 'Lumusitech', 'información'],
}

export default function AboutPage() {
  return <span className='text-5xl'>About page</span>
}

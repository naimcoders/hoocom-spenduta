import bannerTest from '@/assets/bannerTest.webp'

interface ClientProps {
  id: number
  title: string
  src: string
}

export const dataClients: ClientProps[] = [
  {
    id: 1,
    title: 'SMP 1 Takalar',
    src: bannerTest
  },
  {
    id: 2,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
]
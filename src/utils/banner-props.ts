import bannerTest from '@/assets/bannerTest.webp'
import bannerTest2 from '@/assets/bannerTest2.webp'

interface BannerProps {
  id: number
  src: string
}

export const dataBanners: BannerProps[] = [
  { id: 1, src: bannerTest },
  { id: 2, src: bannerTest2 }
]
import bnnr1 from '@/assets/banner1.webp';
import bnnr2 from '@/assets/banner2.webp';

interface BannerProps {
  id: number
  src: string
}

export const dataBanners: BannerProps[] = [
  { id: 1, src: bnnr1 },
  { id: 2, src: bnnr2 }
]
import smaN1Takalar from '@/assets/client/SMAN 1 TKLR_11zon.webp';
import man1Image from '@/assets/client/MAN-1-MKS.webp';
import man2Image from '@/assets/client/MAN-2-_Model_-MKS.webp';
import smaN9 from '@/assets/client/SMAN-9-MKS.webp';
import smpBinaCitra from '@/assets/client/SMP-Bina-Citra-Indonesia.webp';
import smpDianHarapan from '@/assets/client/SMP-Dian-Harapan-Indonesia.webp';
import smpMuhammadiyah1 from '@/assets/client/SMP-Muhammadiyah-1-MKS.webp';
import smpMuhammadiyah2 from '@/assets/client/SMP-Muhammadiyah-2-Makassar.webp';
import smpN2Takalar from '@/assets/client/SMPN+2+Takalar.jpg.webp';

interface ClientProps {
  id: number
  title: string
  src: string
}

export const dataClients: ClientProps[] = [
  {
    id: 1,
    title: 'SMP 2 Takalar',
    src: smpN2Takalar
  },
  {
    id: 2,
    title: 'MAN 1 Makassar',
    src: man1Image
  },
  {
    id: 3,
    title: 'MAN 2 Makassar',
    src: man2Image
  },
  {
    id: 4,
    title: 'SMA Negeri 1 Takalar ',
    src: smaN1Takalar
  },
  {
    id: 5,
    title: 'SMA Negeri 9',
    src: smaN9
  },
  {
    id: 6,
    title: 'SMP Bina Citra Indonesia',
    src: smpBinaCitra
  },
  {
    id: 7,
    title: 'SMP Dian Harapan Indonesia',
    src: smpDianHarapan
  },
  {
    id: 8,
    title: 'SMP Muhammadiyah 1 Makassar',
    src: smpMuhammadiyah1
  },
  {
    id: 9,
    title: 'SMP Muhammadiyah 2 Makassar',
    src: smpMuhammadiyah2
  },
  {
    id: 10,
    title: 'SMA Negeri 1 Takalar',
    src: smaN1Takalar
  },
]

interface SlideRuleProps {
  settingSlide: {
    mobile: number
    desktop: number
  }
  fixWindowWidth: number
}

export const handleSlidesToShow = (currentInnerWidth: number): number => {
  const {
    fixWindowWidth, settingSlide
  }: SlideRuleProps = {
    settingSlide: { mobile: 1, desktop: 4 },
    fixWindowWidth: 600
  }

  const { mobile, desktop } = settingSlide
  const lengthClients: number = dataClients.length

  const result: number = currentInnerWidth > fixWindowWidth && lengthClients > desktop ? desktop : mobile

  return result
}

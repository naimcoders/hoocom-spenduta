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
  {
    id: 3,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 4,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 5,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 6,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 7,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 8,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 9,
    title: 'SMP 2 Takalar',
    src: bannerTest
  },
  {
    id: 10,
    title: 'SMP 2 Takalar',
    src: bannerTest
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

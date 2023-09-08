export interface HeaderProps {
  pageName: string
}

export interface ArrayLinkProps {
  id: number
  to: string
  indonesianTitle: string
  englishTitle: string
}

export const dataLinks: ArrayLinkProps[] = [
  {
    id: 1,
    to: '/',
    indonesianTitle: 'Beranda',
    englishTitle: 'home'
  },
  {
    id: 2,
    to: '/tentang-kami',
    indonesianTitle: 'Tentang kami',
    englishTitle: 'aboutus'
  },
  {
    id: 3,
    to: '/layanan',
    indonesianTitle: 'Layanan',
    englishTitle: 'services'
  },
  {
    id: 4,
    to: '/hubungi-kami',
    indonesianTitle: 'Hubungi kami',
    englishTitle: 'contacts'
  }
]
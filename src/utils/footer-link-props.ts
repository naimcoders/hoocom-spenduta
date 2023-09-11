type FooterLinkProps = {
  id: number
  title: string
  links: {
    id: number
    title: string
    to: string
  }[]
}

export const footerLinks: FooterLinkProps[] = [
  {
    id: 1,
    title: 'Sosial Media',
    links: [
      { id: 1, title: 'Instagram', to: 'https://instagram.com/dudigrocee_undipamks?igshid=OGQ5ZDc2ODk2ZA==' },
      { id: 2, title: 'Facebook', to: '#' },
      { id: 3, title: 'LinkedIn', to: '#' },
    ]
  },
  {
    id: 2,
    title: 'Tentang kami',
    links: [
      { id: 1, title: 'Tentang kami', to: '/tentang-kami' }
    ]
  },
  {
    id: 3,
    title: 'Kontak',
    links: [
      { id: 1, title: 'Hubungi kami', to: '/hubungi-kami' }
    ]
  },
]
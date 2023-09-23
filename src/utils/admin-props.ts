interface CardDataUser {
  id: number
  title: string
  link: string
}

export const cardDataUser: CardDataUser[] = [
  { id: 1, title: 'pegawai', link: '/admin/data-pegawai' },
  { id: 2, title: 'kelas', link: '/admin/data-kelas' },
  { id: 3, title: 'mata pelajaran', link: '/admin/data-mata-pelajaran' }
]
import img1 from '@/assets/whyHoocom.webp'

interface ServiceUserRoleProps {
  id: number
  title: string
  srcImg: string
  listFeatures: {
    id: number,
    features: string
  }[]
}

export const dataRoles: ServiceUserRoleProps[] = [
  {
    id: 1,
    title: 'orang tua',
    srcImg: img1,
    listFeatures: [
      { id: 1, features: 'Melihat nilai tugas' },
      { id: 2, features: 'Melihat nilai ulangan' },
      { id: 3, features: 'Melihat nilai UTS dan UAS' },
      { id: 4, features: 'Berkomunikasi dengan guru' },
      { id: 5, features: 'Memantau progres anak' }
    ]
  },
  {
    id: 2,
    title: 'wali kelas',
    srcImg: img1,
    listFeatures: [
      { id: 1, features: 'Menginput data murid' },
      { id: 2, features: 'Menginput data orang tua murid' },
      { id: 3, features: 'Memantau progres murid' }
    ]
  },
  {
    id: 3,
    title: 'guru mata pelajaran',
    srcImg: img1,
    listFeatures: [
      { id: 1, features: 'Menginput nilai tugas mata pelajaran' },
      { id: 2, features: 'Menginput nilai ulangan harian' },
      { id: 3, features: 'Menginput nilai UTS dan UAS' },
      { id: 4, features: 'Menginput presensi murid' },
    ]
  },
  {
    id: 4,
    title: 'operator',
    srcImg: img1,
    listFeatures: [
      { id: 1, features: 'Mengatur periode tahun pelajaran' },
      { id: 2, features: 'Menginput data guru dan pegawai' }
    ]
  }
]
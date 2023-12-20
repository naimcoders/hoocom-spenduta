type GeneralDataProps = {
  id: number
  type: string
  inEnglish: string
  inIndonesia: string
  placeholder: string
}

export const generalDatas: GeneralDataProps[] = [
  {
    id: 1,
    type: 'text',
    inEnglish: 'period',
    inIndonesia: 'periode',
    placeholder: 'Masukkan tahun pelajaran'
  },
  {
    id: 2,
    type: 'number',
    inEnglish: 'semester',
    inIndonesia: 'semester',
    placeholder: 'Masukkan semester'
  },
  {
    id: 3,
    type: 'number',
    inEnglish: 'kkm',
    inIndonesia: 'KKM',
    placeholder: 'Masukkan KKM'
  },
  {
    id: 4,
    type: 'email',
    inEnglish: 'email',
    inIndonesia: 'email',
    placeholder: 'Masukkan email sekolah'
  },
  {
    id: 5,
    type: 'password',
    inEnglish: 'password',
    inIndonesia: 'kata sandi',
    placeholder: 'Masukkan kata sandi'
  },
]
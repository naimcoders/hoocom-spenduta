import { useLoginStore } from '@/store/loginStore'
import { useState } from 'react'

const SelectAccount = () => {
  const [adminWrapper, setAdminWrapper] = useState<boolean>(false)
  const [wkWrapper, setWkWrapper] = useState<boolean>(false)
  const [gmWrapper, setGmWrapper] = useState<boolean>(false)
  const setAccountType = useLoginStore(state => state.setAccountType)

  const handleAdminWrapper = () => {
    setAdminWrapper(!adminWrapper)
    setWkWrapper(false)
    setGmWrapper(false)
    setAccountType(!adminWrapper ? 'admin' : '')
  }
  
  const handleWkWrapper = () => {
    setWkWrapper(!wkWrapper)
    setAdminWrapper(false)
    setGmWrapper(false)
    setAccountType(!wkWrapper ? 'wali kelas' : '')
  }
  
  const handleGmWrapper = () => {
    setGmWrapper(!gmWrapper)
    setAdminWrapper(false)
    setWkWrapper(false)
    setAccountType(!gmWrapper ? 'guru mapel' : '')
  }

  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor="chooseAnAccount" className='capitalize'>pilih jenis akun</label>
      <div className='grid 600px:grid-cols-3 gap-3'>
        <div className={
          `${adminWrapper ? 'bg-secondary text-primary' : null} bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-gray-highlight cursor-pointer select-account`
        } onClick={handleAdminWrapper}>admin</div>

        <div className={
          `${wkWrapper ? 'bg-secondary text-primary' : null} bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-gray-highlight cursor-pointer select-account`
        } onClick={handleWkWrapper}>wali kelas</div>
        
        <div className={
          `${gmWrapper ? 'bg-secondary text-primary' : null} bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-gray-highlight cursor-pointer select-account`
        } onClick={handleGmWrapper}>guru mapel</div>
      </div>
    </div>
  )
}

export default SelectAccount
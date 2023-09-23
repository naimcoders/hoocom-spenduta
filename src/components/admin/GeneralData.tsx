import editIcon from '@/assets/pencilEditIcon.svg'
import { generalDatas } from '@/utils/general-data-props'
import GeneralDataModal from '../modals/GeneralDataModal'
import { useModalStore } from '@/store/modalStore'

const GeneralData = () => {
  const { setIsGeneralData } = useModalStore()
  const editGeneralData = () => {
    setIsGeneralData(true)
  }

  return (
    <>
      <GeneralDataModal />
      <section className='px-5 py-6 flex flex-col gap-4 851px:px-56'>
        <section className='flex justify-between'>
          <h2 className="capitalize font-lexendMedium text-18px">data umum</h2>
          <img
            src={editIcon}
            alt="edit"
            className='general-data-edit cursor-pointer'
            title='edit data umum'
            onClick={editGeneralData}
          />
        </section>

        <section className='card-scroll-horizontal bg-white p-5 flex gap-4 shadow-cardShadow rounded-2xl whitespace-nowrap overflow-auto text-15px'>
          <div className='flex flex-col'>
            {generalDatas.map(general => (
              <h3
                className='capitalize text-[#757575]'
                key={general.id}
              >
                {general.inIndonesia}
              </h3>
            ))}
          </div>
          <div className='flex flex-col'>
            <h3 className='capitalize'>: periode</h3>
            <h3 className='capitalize'>: periode</h3>
            <h3 className='capitalize'>: periode</h3>
            <h3 className='capitalize'>: periode Lorem ipsum dolor sit amet.</h3>
            <h3 className='capitalize'>: periode</h3>
          </div>
        </section>
      </section>
    </>
  )
}

export default GeneralData
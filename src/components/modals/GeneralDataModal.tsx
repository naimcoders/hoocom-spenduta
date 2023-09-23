import { useModalStore } from "@/store/modalStore"
import { FormValuesGeneralData } from '@/utils/form-props'
import { useForm } from 'react-hook-form'
import { onSubmitGeneralData } from "@/onsubmit/on-submit-generaldata"
import ReactDOM from 'react-dom'

import SecondaryButton from '../buttons/SecondaryButton'
import TextfieldMultipleType from '../textfields/TextfieldMultipleType'
import TextfieldPassword from '../textfields/TextfieldPassword'
import TransitionModal from '../templates/transitionModal'


const GeneralDataModal = () => {
  const { register, handleSubmit } = useForm<FormValuesGeneralData>()
  const { isGeneralData, setIsGeneralData } = useModalStore()
  const { onSubmit } = onSubmitGeneralData()
  const generalDataId = document.querySelector('#generalDataModal')

  const closeModal = () => setIsGeneralData(!isGeneralData)
  
  return (
    <>
      {!generalDataId ? null : (
          ReactDOM.createPortal(
            <TransitionModal
              title="edit data umum"
              isOpenModal={isGeneralData}
              isCloseModal={closeModal}
            >
              <form
                className="flex flex-col gap-4 my-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='grid grid-cols-auto-fit gap-2'>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">periode</label>
                    <TextfieldMultipleType
                      type="text"
                      htmlForPropEnglish="period"
                      placeholderProp="periode"
                      inIndonesia='periode'
                      registerProps={register}
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">semester</label>
                    <TextfieldMultipleType
                      type="number"
                      htmlForPropEnglish="semester"
                      placeholderProp="semester"
                      inIndonesia='semester'
                      registerProps={register}
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">KKM</label>
                    <TextfieldMultipleType
                      type="number"
                      htmlForPropEnglish="kkm"
                      placeholderProp="KKM"
                      inIndonesia='KKM'
                      registerProps={register}
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">email sekolah</label>
                    <TextfieldMultipleType
                      type="email"
                      htmlForPropEnglish="email"
                      placeholderProp="email sekolah"
                      inIndonesia='email sekolah'
                      registerProps={register}
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">kata sandi</label>
                    <TextfieldPassword
                      htmlForPropEnglish='password'
                      htmlForPropIndonesia='kata sandi'
                      placeholderProp='masukkan kata sandi'
                      registerProp={register}
                    />
                  </section>
                </div>

                <SecondaryButton label='simpan data' />
              </form>
            </TransitionModal>,
            generalDataId
          )
        )
      }
    </>
  )
}

export default GeneralDataModal
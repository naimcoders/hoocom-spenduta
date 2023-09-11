import hoocomLogo from '@/assets/hoocomLogo.webp'
import FormLogin from '@/components/forms/Login'

const LoginPage = () => {
  return (
    <main className='flex justify-center items-center h-screen 601px:my-8'>
      <section className='bg-white p-5 rounded-2xl w-[20rem] 600px:w-[40rem] shadow-sm'>
        <div className='flex items-center gap-4'>
          <img src={hoocomLogo} alt="hoocom logo" className='w-3rem' />
          <h1 className='uppercase font-lexendSemiBold text-secondary text-20px'>hoocom</h1>
        </div>
        <h1 className='capitalize font-lexendSemiBold text-18px my-6'>masuk</h1>
        <FormLogin />
      </section>
    </main>
  )
}

export default LoginPage
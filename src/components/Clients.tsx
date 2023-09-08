import { dataClients } from '@/constants/client-props'

const Clients = () => {
  return (
    <section className="my-10 600px:px-40 m-auto">
      <h1 className='font-lexendSemiBold text-20px mb-6 text-center text-dark'>Klien kami</h1>
      <div className='scroll-client p-4 flex gap-12 cursor-grab whitespace-nowrap overflow-scroll justify-center'>
        {dataClients.map(client => (
          <div className='flex flex-col gap-4 items-center' key={ client.id }>
            <img
              src={ client.src }
              alt="client"
              className='rounded-50% w-24 h-24'
            />
            <h2 className='text-dark'>{ client.title }</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
import { dataRoles } from '@/utils/service-role-props'

const CardRole = () => {
  return (
    <section className="mb-8 p-5 851px:px-48 grid 851px:grid-cols-2 grid-cols-auto-fit gap-12">
      {dataRoles.map(role => (
        <section className="bg-white shadow-sm rounded-2xl" key={role.id}>
          <img src={role.srcImg} alt="user role" className='h-80 object-cover bg-right-top rounded-tl-2xl rounded-tr-2xl w-full' />
          <div className='p-5 flex flex-col'>
            <h2 className='uppercase font-lexendSemiBold mb-2 text-18px'>
              {role.title}
            </h2>
            <ul>
              {role.listFeatures.map(feature => (
                <ul key={feature.id}>{feature.features}</ul>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </section>
  )
}

export default CardRole
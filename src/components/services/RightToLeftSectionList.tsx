interface SectionProps {
  title: string
  srcImg: string
  listFeatures: {
    id: number,
    features: string
  }[]
}

const RightToLeftSectionList = (
  { title, srcImg, listFeatures }: SectionProps
) => {
  return (
    <section className='p-5 grid grid-cols-auto-fit gap-8 600px:px-40 600px:mb-16 mb-10'>
      <img
        src={ srcImg }
        alt='user role feature'
        className='rounded-2xl 600px:h-56 m-auto shadow-md w-full object-cover'
      />
      <aside className='text-justify'>
        <h2 className="font-lexendSemiBold text-18px mb-2 uppercase">{ title }</h2>
        <ul>
          {listFeatures.map(feature => (
            <li key={ feature.id }>{ feature.features }</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default RightToLeftSectionList
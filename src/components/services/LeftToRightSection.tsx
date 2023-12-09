interface SectionProps {
  title: string
  paragraph: string
  srcImage: string
  altImage: string
}

const LeftToRightSection = (
  { title, paragraph, srcImage, altImage }: SectionProps
) => {
  return (
    <section className='p-5 grid grid-cols-auto-fit gap-8 851px:px-48 851px:py-8 mb-10'>
      <aside className='text-justify'>
        <h2 className="font-lexendSemiBold text-18px mb-2">{ title }</h2>
        <p>{ paragraph }</p>
      </aside>
      <img
        src={ srcImage }
        alt={ altImage }
        className='rounded-2xl 600px:h-56 m-auto w-full object-cover shadow-sm'
      />
    </section>
  )
}

export default LeftToRightSection
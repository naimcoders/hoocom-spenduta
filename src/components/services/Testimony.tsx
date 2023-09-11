import { testimonyDatas } from "@/utils/testimony-props"

const Testimony = () => {
  return (
    <section className="mb-10 600px:px-40 p-5">
      <h2 className="font-lexendSemiBold text-center text-20px">
        Apa kata pengguna?
      </h2>
      <section className="grid grid-cols-auto-fit gap-4">
        {testimonyDatas.map(testimony => (
          <section className="flex flex-col gap-4 mt-10 bg-white p-4 rounded-2xl shadow-sm" key={ testimony.id }>
            <div>
              <h3 className="capitalize font-lexendMedium text-18px">
                { testimony.name }
              </h3>
              <h4 className="text-[#969696]">{ testimony.role }</h4>
            </div>
            <p>{ testimony.paragraph }</p>
          </section>
        ))}
      </section>
    </section>
  )
}

export default Testimony
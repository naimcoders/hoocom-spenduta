import { MoonLoader } from "react-spinners"

const Loading = () => {
  return (
    <section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
      <MoonLoader color="#57adf4" />
    </section>
  )
}

export default Loading
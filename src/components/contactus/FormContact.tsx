import { Form } from "react-router-dom"

const FormContact = () => {
  return (
    <Form className="bg-white text-dark flex flex-col p-5 rounded-2xl shadow-sm gap-4 items-center m-auto justify-center 600px:w-[25rem]">
        <div className="flex flex-col gap-2 w-full">
            <label> 
                Nama Lengkap 
            </label>
            <input type="text" required placeholder="Masukkan nama lengkap" className="px-4 py-2 text-dark border-2 border-gray-highlight rounded-lg focus:outline-secondary focus:outline-2 "/>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <label> 
                Email
            </label>
            <input type="email" required placeholder="Masukkan email" className="px-4 py-2 text-dark border-2 border-gray-highlight rounded-lg focus:outline-secondary focus:outline-2 "/>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <label> 
                Pesan
            </label>
            <input type="text" required placeholder="Masukkan pesan" className="px-4 py-2 text-dark border-2 border-gray-highlight rounded-lg focus:outline-secondary focus:outline-2 "/>
        </div>
        <button className="bg-blue-500 w-full mt-5 hover:bg-blue-700 text-white font-lexendMedium py-2 px-4 rounded">
            Kirim
        </button>
</Form>
)
}

export default FormContact
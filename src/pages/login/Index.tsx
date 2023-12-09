import hoocomLogo from "@/assets/hoocomLogo.webp";
import Loading from "@/components/Loading";
import FormLogin from "@/components/forms/Login";
import SubmitLogin from "@/onsubmit/admin/submitLogin";

const LoginComponent = () => {
  return (
    <main className="flex justify-center items-center h-screen 601px:my-8">
      <section className="bg-white p-5 rounded-2xl w-[20rem] 600px:w-[40rem] shadow-sm">
        <header className="flex items-center gap-4">
          <img src={hoocomLogo} alt="hoocom logo" className="w-3rem" />
          <h1 className="uppercase font-lexendSemiBold text-secondary text-20px">
            hoocom
          </h1>
        </header>
        <h1 className="capitalize font-lexendSemiBold text-18px my-6">masuk</h1>
        <FormLogin />
      </section>
    </main>
  );
};

const LoginPage = () => {
  const { isLoading } = SubmitLogin();

  return <>{isLoading ? <Loading /> : <LoginComponent />}</>;
};

export default LoginPage;

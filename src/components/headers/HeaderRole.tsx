import { useProfileHook } from "@/custom-hook/useProfile";
import { timeGreeting } from "@/utils/time-greeting";
import { useAuth } from "@/store/userStore";
import ImageProfile from "../ImageProfile";

const TitleComponent = () => {
  const greeting = timeGreeting();
  const user = useAuth((v) => v.user);

  return (
    <section>
      <h1 className="capitalize font-lexendMedium text-15px text-dark">
        selamat {greeting}
      </h1>
      <h2 className="font-lexendSemiBold text-20px capitalize">
        {user?.fullname}
      </h2>
    </section>
  );
};

const ProfileImageComponent = () => {
  const { navigateToProfile, setImageSrc } = useProfileHook();

  return (
    <>
      <ImageProfile
        src={setImageSrc}
        onClick={navigateToProfile}
        height="h-8"
        width="w-8"
      />
    </>
  );
};

const HeaderRole = () => {
  return (
    <>
      <header className="px-5 py-6 flex items-center justify-between bg-white 851px:px-56">
        <TitleComponent />
        <ProfileImageComponent />
      </header>
    </>
  );
};

export default HeaderRole;

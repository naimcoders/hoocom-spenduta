import { useAuth } from "@/store/userStore";
import ImageProfile from "./ImageProfile";
import { usePasswordHook, useProfileHook } from "@/custom-hook/useProfile";
import { TFuncVoid } from "@/types/commonTypes";
import CheckPasswordModal from "./modals/CheckPasswordModal";
import ChangePasswordModal from "./modals/ChangePasswordModal";
import { SubmitProfile } from "@/onsubmit/profile.submit";
import Loading from "./Loading";

const HeaderComponent = () => {
  return (
    <header className="bg-white p-5 851px:px-56">
      <h1 className="font-lexendSemiBold text-18px">Profil</h1>
    </header>
  );
};

type TFileInput = {
  fileInputRef: React.RefObject<HTMLInputElement>;
  handlePhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEditPhoto: () => void;
  onClickDeletePhoto: () => void;
  percent: number;
};

type TFileButton = {
  label: "Edit" | "Hapus";
  onClick: TFuncVoid;
};

const FileButtonComponent = ({ label, onClick }: TFileButton) => {
  return (
    <button
      className={`${
        label === "Edit"
          ? "bg-blue-100 text-blue-500 hover:bg-blue-200"
          : "bg-red-100 text-red-500 hover:bg-red-200"
      } text-12px bg-blue-100 text-blue-500 px-3 py-1 rounded-lg none-highlight`}
      title={`${label} foto`}
      key={label}
      onClick={onClick}
    >
      {label} foto
    </button>
  );
};

type TProgress = {
  percent: number;
};

const ProgressComponent = ({ percent }: TProgress) => {
  return (
    <>
      {percent > 0 && percent < 100 ? (
        <h2 className="text-14px text-orange-400">Proses {percent}%</h2>
      ) : null}
    </>
  );
};

const FileInputButton = ({
  fileInputRef,
  handlePhotoChange,
  onClickEditPhoto,
  percent,
  onClickDeletePhoto,
}: TFileInput) => {
  const urlImage = useAuth((v) => v.user?.urlImage);

  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        accept="/image/*"
      />

      <section className="flex gap-4">
        <FileButtonComponent label="Edit" onClick={onClickEditPhoto} />
        {!urlImage ? null : (
          <FileButtonComponent label="Hapus" onClick={onClickDeletePhoto} />
        )}
      </section>

      <ProgressComponent percent={percent} />
    </>
  );
};

const ImageComponent = () => {
  const {
    fileInputRef,
    handlePhotoChange,
    onClickEditPhoto,
    percent,
    setImageSrc,
    getProfile,
    onClickDeletePhoto,
  } = useProfileHook();
  if (getProfile.isLoading) return <Loading />;

  return (
    <section className="bg-white 851px:mx-56 rounded-lg p-5 flex flex-col items-center gap-5">
      <ImageProfile src={setImageSrc} height="h-28" width="w-28" />
      <FileInputButton
        fileInputRef={fileInputRef}
        handlePhotoChange={handlePhotoChange}
        onClickEditPhoto={onClickEditPhoto}
        percent={percent}
        onClickDeletePhoto={onClickDeletePhoto}
      />
    </section>
  );
};

type TLabels = {
  label: string;
  value?: string;
};

const UserInformationComponent = () => {
  const user = useAuth((v) => v.user);
  const teacherNIP = user?.teacher?.nip ?? user?.admin?.nip;

  const arrLabels: TLabels[] = [
    { label: "NIP", value: teacherNIP },
    { label: "nama lengkap", value: user?.fullname },
    { label: "email", value: user?.email },
    { label: "no. HP", value: user?.phone },
  ];

  return (
    <section className="bg-white p-5 851px:mx-56 rounded-lg flex flex-col gap-5 whitespace-nowrap overflow-auto">
      <h1 className="capitalize font-lexendMedium text-18px">
        informasi pribadi
      </h1>

      <section className="flex gap-4 w-max">
        <section className="flex flex-col gap-2 text-14px">
          {arrLabels.map(({ label }) => (
            <h2 className="capitalize" key={label}>
              {label}
            </h2>
          ))}
        </section>
        <section className="flex flex-col gap-2 text-14px">
          {arrLabels.map(({ value }) => (
            <h2 key={value}>: {value}</h2>
          ))}
        </section>
      </section>
    </section>
  );
};

const FooterComponent = () => {
  const { actionFirstModal } = usePasswordHook();
  const { userSignOut } = SubmitProfile();

  return (
    <>
      <footer className="bg-white p-5 851px:mx-56 rounded-lg flex flex-col gap-4">
        <button
          className="text-14px bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md none-highlight"
          onClick={actionFirstModal}
        >
          Ubah kata sandi
        </button>
        <button
          className="text-14px bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md none-highlight"
          onClick={userSignOut}
        >
          Keluar dari akun
        </button>
      </footer>

      <CheckPasswordModal />
      <ChangePasswordModal />
    </>
  );
};

const Profile = () => {
  return (
    <main className="flex flex-col gap-4">
      <HeaderComponent />
      <ImageComponent />
      <UserInformationComponent />
      <FooterComponent />
    </main>
  );
};

export default Profile;

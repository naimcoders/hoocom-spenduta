import profileDefault from "@/assets/profileDefault.webp";
import { useRef, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "@/configs/firebase";
import {
  StorageReference,
  getDownloadURL,
  uploadBytesResumable,
  ref,
  deleteObject,
} from "firebase/storage";
import { usePatchPhotoProfile } from "@/hooks/use-profile";
import { useAuth } from "@/store/userStore";
import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import { useActiveModal } from "./useActiveModal";
import { toast } from "react-toastify";
import { reloadPage } from "@/utils/default-type";

enum Elimit {
  maxImageSize = 2,
  devideImageSize = 1024,
}

const megaBytesValidate = (size: number): boolean => {
  const { devideImageSize, maxImageSize } = Elimit;
  const imageSize: number = size;
  const fileSizeInKB = imageSize / devideImageSize;
  const fileSizeInMB = fileSizeInKB / devideImageSize;
  const toFixed = fileSizeInMB.toFixed(2);
  return Number(toFixed) > maxImageSize;
};

const downloadURL = async (ref: StorageReference) => {
  try {
    return await getDownloadURL(ref);
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

const setPath = (fileName: string): string => {
  const folderName: string = "hoocom";
  return `${folderName}/${fileName}`;
};

export const useProfileHook = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [percent, setPercent] = useState<number>(0);
  const user = useAuth((v) => v.user);
  const userId = user?.id ?? "";

  const urlImage = user?.urlImage;
  const setImageSrc = !urlImage ? profileDefault : urlImage;

  const onClickEditPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const editPhoto = usePatchPhotoProfile(userId);
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const now = new Date();
    const time = now.getTime();
    const files = e.target.files;
    const size = e.target.files?.[0]?.size ?? 0;

    if (files?.length! < 1) {
      return;
    }

    if (megaBytesValidate(size)) {
      toast.error("Ukuran foto maksimal 2MB");
      setTimeout(reloadPage, 2000);
      return;
    }

    const file = e.target.files?.[0]!;
    const fileName: string = `${file.name}-${time}`;
    const path = setPath(fileName);
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.error(err),
      async () => {
        const url = await downloadURL(uploadTask.snapshot.ref);
        const toMutate = {
          urlImage: url,
          imageName: fileName,
        };
        await editPhoto.mutateAsync(toMutate);
      }
    );
  };

  const onClickDeletePhoto = async () => {
    try {
      const fileTarget = setPath(user?.imageName ?? "");
      const desertRef = ref(storage, fileTarget);
      await deleteObject(desertRef);
      await editPhoto.mutateAsync({ imageName: null, urlImage: null });
    } catch (err) {
      console.error(err);
    }
  };

  const navigateToProfile = () => navigate("/profil");

  return {
    navigateToProfile,
    fileInputRef,
    onClickEditPhoto,
    handlePhotoChange,
    percent,
    setImageSrc,
    onClickDeletePhoto,
  };
};

export const usePasswordHook = () => {
  const { control, handleSubmit } = useForm<FormValues>({ mode: "onChange" });
  const { isFirstModal, isSecondModal, actionSecondModal, actionFirstModal } =
    useActiveModal();

  return {
    isFirstModal,
    actionFirstModal,
    control,
    actionSecondModal,
    isSecondModal,
    handleSubmit,
  };
};

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
import { useGetPhotoProfile, usePatchPhotoProfile } from "@/hooks/use-profile";
import { useAuth } from "@/store/userStore";
import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import { useActiveModal } from "./useActiveModal";

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

  const getProfile = useGetPhotoProfile(userId);
  const urlImage = getProfile.data?.data?.urlImage;
  const setImageSrc = !urlImage ? profileDefault : urlImage;

  const onClickEditPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const editPhoto = usePatchPhotoProfile(userId);
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length! < 1) {
      return;
    }

    const file = e.target.files?.[0]!;
    const fileName: string = file.name;
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
      (err) => console.log(err),
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
    getProfile,
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

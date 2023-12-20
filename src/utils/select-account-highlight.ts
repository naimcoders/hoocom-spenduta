import useUserStore from "@/store/userStore";
import { useState } from "react";

const selectAccountHighlight = () => {
  const [adminWrapper, setAdminWrapper] = useState<boolean>(false);
  const [wkWrapper, setWkWrapper] = useState<boolean>(false);
  const [gmWrapper, setGmWrapper] = useState<boolean>(false);
  const { setAccountType, setSelectedClass } = useUserStore();

  const handleAdminWrapper = () => {
    setAdminWrapper(!adminWrapper);
    setWkWrapper(false);
    setGmWrapper(false);
    setSelectedClass();
    setAccountType(!adminWrapper ? "admin" : "");
  };

  const handleWkWrapper = () => {
    setWkWrapper(!wkWrapper);
    setAdminWrapper(false);
    setGmWrapper(false);
    setAccountType(!wkWrapper ? "wali-kelas" : "");
  };

  const handleGmWrapper = () => {
    setGmWrapper(!gmWrapper);
    setAdminWrapper(false);
    setWkWrapper(false);
    setSelectedClass();
    setAccountType(!gmWrapper ? "guru-mapel" : "");
  };

  return {
    handleAdminWrapper,
    handleWkWrapper,
    handleGmWrapper,
    adminWrapper,
    wkWrapper,
    gmWrapper,
    setAdminWrapper,
    setGmWrapper,
    setWkWrapper,
  };
};

export default selectAccountHighlight;

import { useState } from "react";
import t from "@/src/translations/Register";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useRegisterHook() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showDemo, setShowDemo] = useState(false);
  const [demoContent, setDemoContent] = useState({
    title: "",
    message: "",
  });

  const { homePath, loginPath } = useRoutesHook();

  const { navigate } = useNavigate();

  const openModal = (title, message) => {
    setDemoContent({
      title,
      message,
    });

    setShowDemo(true);
  };

  const handleLockedFieldFocus = (event) => {
    event.currentTarget.blur();

    openModal(t.modal.lockedField.title, t.modal.lockedField.message);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    openModal(t.modal.register.title, t.modal.register.message);
  };

  return {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    showDemo,
    setShowDemo,
    demoContent,
    setDemoContent,
    openModal,
    handleLockedFieldFocus,
    handleRegister,
    navigate,
    homePath,
    loginPath,
  };
}

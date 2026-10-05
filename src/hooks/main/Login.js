import { useState } from "react";
import t from "@/src/translations/Login";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useLoginHook() {
  const [showPassword, setShowPassword] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoContent, setDemoContent] = useState({
    title: "",
    message: "",
  });

  const { homePath, registerPath } = useRoutesHook();
  const { navigate } = useNavigate();

  const openModal = (title, message) => {
    setDemoContent({
      title,
      message,
    });

    setShowDemo(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    openModal(t.modal.login.title, t.modal.login.message);
  };

  const handleForgotPassword = () => {
    openModal(t.modal.forgotPassword.title, t.modal.forgotPassword.message);
  };

  return {
    showPassword,
    setShowPassword,
    showDemo,
    setShowDemo,
    demoContent,
    setDemoContent,
    openModal,
    handleLogin,
    handleForgotPassword,
    homePath,
    registerPath,
    navigate,
  };
}

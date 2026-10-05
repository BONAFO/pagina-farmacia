import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useContactHook() {
  const INFO_STYLES = [
    "bg-emerald-50/50",
    "bg-white shadow-sm",
    "bg-white shadow-sm",
    "bg-emerald-50/50",
  ];

  const { homePath, servicesPath } = useRoutesHook();
  const { navigate } = useNavigate();
  return {
    INFO_STYLES,
    homePath,
    servicesPath,
    navigate,
  };
}

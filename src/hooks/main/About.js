import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useAboutHook() {
    const CARD_STYLES = [
        "bg-emerald-50",
        "bg-white shadow-sm",
        "bg-white shadow-sm",
        "bg-emerald-50",
    ];

    const { contactPath, servicesPath } = useRoutesHook();
    const { navigate } = useNavigate();

    return {
        CARD_STYLES,
        contactPath,
        servicesPath,
        navigate,
    }

}
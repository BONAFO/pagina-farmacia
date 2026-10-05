import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useServicesHook() {
    const { navigate } = useNavigate();
    const { contactPath } = useRoutesHook();
    return {
        navigate,
        contactPath
    }
}
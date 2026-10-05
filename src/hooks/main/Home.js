import { useCategoryNavigationHook, useNavigate } from "../Navigation";
import categories from "../../db/Categories.db.json";
import useRoutesHook from "./Routes";

export default function useHomeHook() {
  const categoryNavigation = useCategoryNavigationHook();
  const visibleCategories = categories.slice(0, 6);
  const { contactPath, productsPath, servicesPath, aboutPath } =
    useRoutesHook();
  const { navigate } = useNavigate();
  return {
    visibleCategories,
    categoryNavigation,
    contactPath,
    productsPath,
    servicesPath,
    aboutPath,
    navigate,
  };
}



import { useNavigationHook } from "../Navigation";

export default function useRoutesHook() {

    const contactPath = useNavigationHook("contact");
    const servicesPath = useNavigationHook("services");
    const homePath = useNavigationHook("home");
    const productsPath = useNavigationHook("products");
    const aboutPath = useNavigationHook("about");
    const registerPath = useNavigationHook("register");
    const loginPath = useNavigationHook("login");
    const shippingPath = useNavigationHook("shipping");
    const productPath = useNavigationHook("product");
    return {
        contactPath,
        servicesPath,
        homePath,
        productsPath,
        aboutPath,
        registerPath,
        loginPath,
        shippingPath,
        productPath
    }
}


function useCosa() {


    const { contactPath, homePath, productsPath, servicesPath, aboutPath, registerPath, loginPath, shippingPath, productPath } = useRoutesHook();


}
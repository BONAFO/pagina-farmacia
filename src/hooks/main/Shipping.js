import useRoutesHook from "./Routes";

export default function useShippingHook() {

    const { contactPath, productsPath } = useRoutesHook();

    

    return {
        contactPath,
        productsPath
    }
}
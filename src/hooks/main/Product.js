

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function useProductHook(product) {

    const MAX_QTY = 99;
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [showDemo, setShowDemo] = useState(false);

    if (!product) {
        return null;
    }

    const { name, brand, price, image } = product;

    const decrease = () => setQuantity((q) => Math.max(1, q - 1));
    const increase = () => setQuantity((q) => Math.min(MAX_QTY, q + 1));

    return {
        decrease,
        increase,
        name,
        brand,
        price,
        image,
        router,
        quantity,
        setQuantity,
        showDemo,
        setShowDemo,
        MAX_QTY
    };
}

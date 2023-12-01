import { useState } from "react";


function useFlip(initailFlipState = true) {
    const [isFlipped, setisFlipped] = useState(initailFlipState);

    const flip = () => {
        setisFlipped(up => !up);
    };

    return [isFlipped, flip];

}

export default useFlip;
import React, {useEffect, useRef} from 'react';
import arrowAnimation from "../animations/arrow.json";
import Lottie from "lottie-react";



const ArrowDownAnimation = () => {
    const lottieRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lottieRef.current.play();
        }, 1200)
    }, []);

    return (
        <div>
            <Lottie animationData={arrowAnimation} loop={true} lottieRef={lottieRef} autoplay={false} style={{width: 48, height: 48}}/>
        </div>
    );
}

export default ArrowDownAnimation

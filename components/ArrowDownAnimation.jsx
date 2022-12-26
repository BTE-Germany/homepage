import React, {useEffect, useRef} from 'react';
import {createStyles, keyframes} from "@mantine/core";
import arrowAnimation from "../animations/arrow.json";
import Lottie from "lottie-react";


const useStyle = createStyles((theme) => ({
    arrowAnimatation: {
        position: "absolute",
        bottom: 100,
    }
}));

const ArrowDownAnimation = () => {
    const {classes} = useStyle();
    const lottieRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lottieRef.current.play();
        }, 1200)
    }, []);

    return (
        <div className={classes.arrowAnimatation}>
            <Lottie animationData={arrowAnimation} loop={true} lottieRef={lottieRef} autoplay={false} style={{width: 48, height: 48}}/>
        </div>
    );
}

export default ArrowDownAnimation

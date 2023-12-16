import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import {useMantineTheme} from "@mantine/core";


export const FloatingImage = ({offsetX, offsetY, speed, z, h, w, url}) => {
    const ref = useRef(null);

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const {scrollYProgress} = useScroll();

    const theme = useMantineTheme();
    return (
        <div style={{transform: `translate(${offsetX}px, ${offsetY}px)`, zIndex: z}}>
            <motion.div style={{
                y: useParallax(scrollYProgress, speed),
                width: h ?? 450,
                height: w ?? 300,
                borderRadius: theme.radius.md,
                overflow: 'hidden',
                position: "absolute",
                boxShadow: z > 0 ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
                //filter: `blur(${2-z+4}px)`,
            }}>
                <Image src={url} layout="fill"
                       objectFit={"cover"} style={{display: "inline-block"}}
                       ref={ref}/>
            </motion.div>
        </div>
    );
}
const FloatingImages = ({children}) => {
    return (
        <div style={{position: "relative", overflow: "visible"}}>
            {children}
        </div>
    )

}

export default FloatingImages

import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Image1 from "@/public/carousel_images/carousel1.png";
import Image2 from "@/public/carousel_images/carousel2.png";
import Image3 from "@/public/carousel_images/carousel3.png";
import Image4 from "@/public/carousel_images/carousel4.png";
import Image5 from "@/public/carousel_images/carousel5.png";
import Image6 from "@/public/carousel_images/carousel6.png";
import Image7 from "@/public/carousel_images/carousel7.png";
import Image8 from "@/public/carousel_images/carousel8.png";

type CarouselProps = {
    baseVelocity: number;
};

export default function ImageCarousel({ baseVelocity = 100 }: CarouselProps) {
    // TODO: Name - Image pairings for image alts
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

    const baseX = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    useEffect(() => {
        if (!containerRef.current) return;

        const measure = () => {
            const width = containerRef.current!.scrollWidth / 2;
            setContentWidth(width);
        };

        measure();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    const x = useTransform(baseX, (v) => {
        if (!contentWidth) return "0px";

        const wrapped = ((v % contentWidth) + contentWidth) % contentWidth;
        return `${-wrapped}px`;
    });

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section className=" mb-30 lg:mb-40">
            <div className="overflow-hidden flex flex-nowrap">
                <motion.div ref={containerRef} className="flex flex-nowrap gap-2" style={{ x }}>
                    {[...images, ...images].map((img, index) => (
                        <Image key={index} src={img} alt="Community" width={400} className="rounded-xl" />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

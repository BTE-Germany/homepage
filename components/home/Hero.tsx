"use client";

import Image1 from "@/public/hero_images/heroimage1.png";
import Image2 from "@/public/hero_images/heroimage2.png";
import Image3 from "@/public/hero_images/heroimage3.png";
import Image4 from "@/public/hero_images/heroimage4.png";
import Image from "next/image";
import { motion } from "motion/react";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { ComponentPropsWithRef, useCallback, useEffect, useRef, useState } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react'
import { useTranslations } from "next-intl";

export default function Hero() {

    const t = useTranslations('Home');


    const containerVariants = {
        hidden: {

        },
        visible: {
            transition: {
                ease: [.03, .72, .04, .98],
                duration: 0.6,
                staggerChildren: 0.08,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: [.03, .72, .04, .98], duration: 2 },
        },
    };

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true }, [Autoplay()])
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <section className="container mx-auto mt-20 sm:mt-24 md:mt-32 px-4 sm:px-6 md:px-0">
            <motion.div className="rounded-2xl overflow-hidden relative shadow-lg" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [.03, .72, .04, .98] }}>
                <div className="h-full w-full bg-neutral-900/50 absolute z-10" />
                <div className="absolute w-full z-10 p-5 sm:p-8 md:p-16 flex flex-col gap-4 md:gap-6 text-white justify-between h-full">
                    <div className="text-wrap">

                        <motion.h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-8xl font-black uppercase" variants={containerVariants} initial="hidden" animate="visible">
                            {t('hero.title').split(' ').map((word, index) => (
                                <motion.span key={index} className="block mr-1" variants={wordVariants}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-start md:items-center">
                        <motion.p className="text-base sm:text-lg font-medium flex items-center gap-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease: [.03, .72, .04, .98] }}>
                            <IconArrowNarrowDown />
                            {t('hero.moreInfo')}
                        </motion.p>
                        <div className="flex flex-wrap">
                            {scrollSnaps.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={`w-3 h-1 rounded-full mx-2 cursor-pointer transition  ${index === selectedIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <ImageCarousel emblaRef={emblaRef} emblaApi={emblaApi} />




            </motion.div>
        </section>
    )

};

type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}



function ImageCarousel({ emblaRef, emblaApi }: { emblaRef?: EmblaViewportRefType, emblaApi?: EmblaCarouselType }) {

    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])
    const TWEEN_FACTOR_BASE = 0.3


    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const translate = diffToTarget * (-1 * tweenFactor.current) * 100
                    const tweenNode = tweenNodes.current[slideIndex]
                    tweenNode.style.transform = `translateX(${translate}%)`
                })
            })
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
    }, [emblaApi, tweenParallax])

    const slides = [Image1, Image2, Image3, Image4];

    return (
        <section className="">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {slides.map((img, index) => (
                        <div className="flex-[0_0_100%] min-w-0" key={index}>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">
                                    <Image src={img} alt={`Slide ${index + 1}`} className="object-cover w-full h-[520px] sm:h-[600px] md:h-auto" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

export default function TransitionLink({
    route,
    callback,
    children,
}: {
    route: string;
    callback?: () => void;
    children: ReactNode | ReactNode[];
}) {
    const router = useTransitionRouter();
    const pathName = usePathname();

    function transitionPage(e: MouseEvent) {
        if (isExternalLink()) return;

        e.preventDefault();

        if (pathName === route) {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        router.push(route, {
            onTransitionReady: pageAnimation,
        });

        if (callback) callback();
    }

    const isExternalLink = (): boolean => !route.startsWith("/");

    return (
        <Link href={route} onClick={(e) => transitionPage(e)} target="_blank">
            {children}
        </Link>
    );
}

const pageAnimation = () => {
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: "translateY(0)",
            },
            {
                opacity: 0.5,
                scale: 0.9,
                transform: "translateY(-100px)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        },
    );

    document.documentElement.animate(
        [
            {
                transform: "translateY(100%)",
            },
            {
                transform: "translateY(0)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
        },
    );
};

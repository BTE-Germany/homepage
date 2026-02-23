"use client";

import { IconCheck, IconCookieFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function CookieNotice() {
    const t = useTranslations("CookieBanner");

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    return (
        <div className="fixed bottom-0 right-0 p-8 z-50">
            <AnimatePresence>
                {!isVisible ? null : (
                    <motion.div
                        className="bg-background p-4 rounded-lg shadow-md max-w-md border"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, ease: [0.03, 0.72, 0.04, 0.98] }}
                    >
                        <div className="flex items-center mb-4">
                            <IconCookieFilled
                                className="inline-block mr-4 text-white"
                                size={28}
                            />
                            <h1 className=" font-medium">{t("title")}</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">{t("message")}</p>

                        <div className="mt-4 flex justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    localStorage.setItem("cookie-consent", "true");
                                    setIsVisible(false);
                                }}
                            >
                                <IconCheck size={16} />
                                {t("accept")}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

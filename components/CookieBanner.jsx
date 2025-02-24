
/*
 * CookieBanner.jsx
 *
 * Copyright (c) 2023 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

import {Box, Button, Group, Paper, Text} from "@mantine/core";
import classes from "./styles/CookieBanner.module.css";
import {useTranslation} from "next-i18next";
import {AnimatePresence, motion} from "framer-motion";
import {getCookie} from "cookies-next";
import {useEffect, useState} from "react";
export default function CookieBanner() {

    const {t} = useTranslation("common");
    const [show, setShow] = useState(false);


    return (
        <AnimatePresence>
            {
                show &&
                <motion.div initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 1, duration: 0.4,}}
                            exit={{opacity: 0, x: 30}} className={classes.banner}>
                    <Paper withBorder p="lg" radius="md" shadow="md">
                        <Group justify="space-between" mb="xs">
                            <Text fz="md" fw={500}>
                                {t("common:cookies.title")}
                            </Text>
                        </Group>
                        <Text c="dimmed" fz="xs">
                            {t("common:cookies.text")}
                        </Text>
                        <Group justify="flex-end" mt="md">
                            <Button variant="default" size="xs" onClick={allowEssentialCookies}>
                                {t("common:cookies.onlyEssential")}
                            </Button>
                            <Button variant="default" size="xs" onClick={allowCookies}>
                                {t("common:cookies.acceptAll")}
                            </Button>
                        </Group>
                    </Paper>
                </motion.div>
            }
        </AnimatePresence>
    )
}
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import React, {useState} from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {IconChevronDown} from "@tabler/icons-react";
import classes from "./LanguageSwitcher.module.css";

const languages = [
    { label: 'English', code: "en" },
    { label: 'German', code: "de" },
];



export default function LanguageSwitcher() {

    const {t, i18n} = useTranslation();
    const router = useRouter()
    const [opened, setOpened] = useState(false);
    const { pathname, asPath, query } = router;

    const items = languages.map((item) => (
        <Menu.Item
            icon={<Image src={`/flags/${item.code}.svg`} width={18} height={18} radius={99} />}
            onClick={() => router.push({ pathname, query }, asPath, { locale: item.code })}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));
    if(!i18n.language) {
        return <></>
    }
    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton className={classes.control}>
                    <Group spacing="xs">
                        <Image src={`/flags/${i18n.language}.svg`} width={22} height={22} radius={99} className={"w-[22px] h-[22px]"} />
                        <span className={classes.label}>{languages.filter((l) => l.code === i18n.language)[0].label}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>

    );
}
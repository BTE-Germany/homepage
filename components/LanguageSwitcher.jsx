import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import React, {useState} from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {IconChevronDown} from "@tabler/icons";

const languages = [
    { label: 'English', code: "en" },
    { label: 'German', code: "de" },
];


const useStyles = createStyles((theme, { opened }) => ({
    control: {
        width: rem(200),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
        }`,
        transition: 'background-color 150ms ease',
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[opened ? 5 : 6]
                : opened
                    ? theme.colors.gray[0]
                    : theme.white,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    label: {
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
    },

    icon: {
        transition: 'transform 150ms ease',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
}));

export default function LanguageSwitcher() {

    const {t, i18n} = useTranslation();
    const router = useRouter()
    const [opened, setOpened] = useState(false);
    const { pathname, asPath, query } = router;
    const { classes } = useStyles({ opened });

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
                        <Image src={`/flags/${i18n.language}.svg`} width={22} height={22} radius={99} />
                        <span className={classes.label}>{languages.filter((l) => l.code === i18n.language)[0].label}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>

    );
}
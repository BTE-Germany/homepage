import React, {useState} from 'react';
import {ActionIcon, Anchor, createStyles, Group, Image, Stack, Stepper, Text} from "@mantine/core";
import {IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconCheck, IconCode, IconCommand} from "@tabler/icons";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "next-i18next";


const links = [
    {
        "link": "/legal",
        "label": "Legal notice"
    },
    {
        "link": "/privacy",
        "label": "Privacy"
    }
]

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        paddingTop: `${theme.spacing.md}`,
        paddingBottom: `${theme.spacing.md}`,
        paddingLeft: "8%",
        paddingRight: "8%",
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            paddingLeft: "3%",
            paddingRight: "3%",
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',


        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

const Footer = props => {
    const {classes} = useStyles();
    const {t} = useTranslation("common");

    const items = links.map((link) => (
        <Anchor
            component={Link}
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{lineHeight: 1}}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>


                <Stack>
                    <Group className={classes.links}>
                        {items}
                    </Group>
                    <Text size={"xs"} color="dimmed">
                        {t('common:footer.notAssociated')}
                    </Text>



                </Stack>

                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5}/>
                    </ActionIcon>
                    <LanguageSwitcher />
                </Group>
            </div>
        </div>
    );
}

export default Footer

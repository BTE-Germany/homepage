import React, {useState} from 'react';
import {ActionIcon, Anchor, Group, Image, Stack, Stepper, Text} from "@mantine/core";
import {IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconCheck, IconCode, IconCommand} from "@tabler/icons-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "next-i18next";
import classes from "./styles/Footer.module.css";

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


const Footer = props => {
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

                <Group spacing="xs" position="right" noWrap align={"center"}>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5}/>
                    </ActionIcon>
                    <LanguageSwitcher />
                    <a href="https://aws.amazon.com/what-is-cloud-computing"><img src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing" width={100}/></a>

                </Group>
            </div>
        </div>
    );
}

export default Footer

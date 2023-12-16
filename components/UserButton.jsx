import {Avatar, Menu, Skeleton} from "@mantine/core";
import React from "react";
import {IconLock, IconUser} from "@tabler/icons-react";
import {signIn, signOut, useSession} from "next-auth/react";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const UserButton = () => {
    const {status, data} = useSession();
    const {t} = useTranslation()
    return (
        <>
            {
                status === "loading" && <Skeleton height={35} circle ml={"md"} />
            }
            {
                status === "unauthenticated" && <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400} withArrow>
                    <Menu.Target>
                        <Avatar radius="xl" ml={"md"} height={35}/>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item leftSection={<IconLock size={14} />} onClick={() => signIn("keycloak")}>{t("common:signIn")}</Menu.Item>

                    </Menu.Dropdown>
                </Menu>
            }

            {
                status === "authenticated" && <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400} withArrow>
                    <Menu.Target>
                        <Avatar radius="xl" ml={"md"} height={35}>{data.user.username.slice(0, 2).toUpperCase()}</Avatar>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item leftSection={<IconUser size={14} />} component={Link} href={"/profile"}>{t("common:myProfile")}</Menu.Item>
                        <Menu.Item leftSection={<IconLock size={14} />} onClick={() => signOut()} color={"red"}>{t("common:signOut")}</Menu.Item>

                    </Menu.Dropdown>
                </Menu>
            }

        </>
    )
}

export default UserButton;
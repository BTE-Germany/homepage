import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Navbar from "../../components/Navbar";
import {
    ActionIcon,
    Alert,
    Badge,
    Box,
    Button,
    Card,
    Container,
    Flex,
    Group,
    Loader,
    NavLink,
    Skeleton,
    Text,
    TextInput,
    Title,
    Tooltip
} from "@mantine/core";
import {useTranslation} from "next-i18next";
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {
    IconAlertTriangle,
    IconBrandApple,
    IconBrandChrome,
    IconBrandDebian,
    IconBrandFirefox,
    IconBrandSafari,
    IconBrandWindows,
    IconCrown,
    IconDevices,
    IconFingerprint,
    IconForms,
    IconKey,
    IconLink,
    IconQuestionCircle, IconRefresh,
    IconUnlink,
    IconX
} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import axios from "axios";
import dayjs from "dayjs";
import {modals} from "@mantine/modals";
import {notifications, showNotification} from "@mantine/notifications";
import {AnimatePresence, motion} from "framer-motion";
import getPkce from 'oauth-pkce';
import {useHash} from "@mantine/hooks";
import Link from "next/link";
import {jwtDecode} from "jwt-decode";
import * as Sentry from "@sentry/nextjs";


export default function ProfilePage() {
    const {t} = useTranslation("profile");
    const {status, data} = useSession({
        required: true,
        onUnauthenticated() {
            signIn("keycloak");
        },
    });
    const [hash, setHash] = useHash();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {

        switch (hash.replace("#", "")) {
            case "general":
                setActivePage(0)
                break;
            case "security":
                setActivePage(1)
                break;
            case "sessions":
                setActivePage(2)
                break;
            case "links":
                setActivePage(3)
                break;
            case "plus":
                setActivePage(4)
                break;
        }
    }, [hash]);

    const switchPage = (idx) => {
        setActivePage(idx);
        switch (idx) {
            case 0:
                setHash("general")
                break;
            case 1:
                setHash("security")
                break;
            case 2:
                setHash("sessions")
                break;
            case 3:
                setHash("links")
                break;
            case 4:
                setHash("plus")
                break;
        }
    }

    const navLinks = [
        {
            icon: IconForms,
            label: t('profilePage.navigation.general'),
            description: t('profilePage.navigation.generalDescription')
        },
        {
            icon: IconFingerprint,
            label: t('profilePage.navigation.security'),
            description: t('profilePage.navigation.securityDescription')
        },
        {
            icon: IconDevices,
            label: t('profilePage.navigation.sessions'),
            description: t('profilePage.navigation.sessionsDescription')
        },
        {
            icon: IconLink,
            label: t('profilePage.navigation.links'),
            description: t('profilePage.navigation.linksDescription')
        },
        {
            icon: IconCrown,
            label: t('profilePage.navigation.plus'),
            description: t('profilePage.navigation.plusDescription')
        },
    ];


    const items = navLinks.map((item, index) => (
        <NavLink
            key={item.label}
            active={index === activePage}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            leftSection={<item.icon size="1rem" stroke={1.5}/>}
            onClick={() => {
                switchPage(index)
            }}
            styles={(theme) => ({
                root: {
                    borderRadius: theme.radius.md
                }
            })}
        />
    ));
    if (status === "loading") {
        return (
            <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                <Navbar disableAnimation/>
                <div style={{
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Loader/>
                </div>
            </div>
        )
    }



    return (
        <>
            <Navbar disableAnimation/>

            <div style={{height: "150px"}}></div>
            <Container size={"xl"}>
                <Title mb={"xl"}>{t('profilePage.title', {"username": data.user.username})}</Title>



                <Flex gap={"xl"} direction={{base: 'column', sm: 'row'}}>
                    <Flex gap={"xs"} direction={{base: 'row', sm: 'column'}}>{items}</Flex>
                    <AnimatePresence mode={"wait"}>
                        <motion.div style={{flex: 1}} initial={{y: 10, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -10, opacity: 0}}
                                    transition={{duration: 0.2}} key={activePage}>
                            {activePage === 0 && <GeneralPage t={t} data={data}/>}
                            {activePage === 1 && <SecurityPage t={t} data={data}/>}
                            {activePage === 2 && <SessionPage t={t} data={data}/>}
                            {activePage === 3 && <LinksPage t={t} data={data}/>}
                            {activePage === 4 && <PlusPage t={t} data={data}/>}
                        </motion.div>
                    </AnimatePresence>
                </Flex>


            </Container>
        </>
    )
}

const GeneralPage = ({data, t}) => {

    const [loading, setLoading] = useState(true);

    const form = useForm({
        initialValues: {
            email: data.email,
            username: data.username
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        setLoading(true);
        try {

            const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/account/`, {headers: {authorization: "Bearer " + data.accessToken}});
            form.setValues({
                email: response.email,
                username: response.username,
            })
            setLoading(false);
        } catch (e) {
            signOut()
        }

    }

    return (
        <>
            <Title mb={"xl"} size={"h3"}>{t('profilePage.navigation.general')}</Title>
            <Box w={"100%"}>
                <Skeleton animate visible={loading}>

                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <Alert title={t('common:attention')} icon={<IconAlertTriangle/>} color={"yellow"}
                               variant={"outline"} mb={"md"}>
                            {t('general.changeNotPossible')}
                        </Alert>

                        <TextInput

                            withAsterisk
                            disabled
                            label="Username"
                            {...form.getInputProps('username')}
                        />

                        <TextInput
                            withAsterisk
                            disabled
                            label="Email"
                            mt={"md"}
                            {...form.getInputProps('email')}
                        />


                    </form>
                </Skeleton>
            </Box>
        </>
    )
}
const SecurityPage = ({data: sessionData, t}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        getSecurityMethods();
    }, []);

    const getSecurityMethods = async () => {
        setLoading(true);
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/account/credentials`, {headers: {authorization: "Bearer " + sessionData.accessToken}});
        setData(response)
        setLoading(false);
    }

    return (
        <>
            <Title mb={"xl"} size={"h3"}>{t('profilePage.navigation.security')}</Title>
            <Box w={"100%"}>
                <Skeleton animate visible={loading} height={100}>

                    {
                        data.map((credential) => {
                            switch (credential.type) {
                                case "password":
                                    return <PasswordCard data={credential}/>
                            }
                        })
                    }
                </Skeleton>
            </Box>
        </>
    )
}
const SessionPage = ({data: sessionData, t}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        getSessions();
    }, []);

    const getSessions = async () => {
        setLoading(true);
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/account/sessions/devices`, {headers: {authorization: "Bearer " + sessionData.accessToken}});
        setData(response)
        setLoading(false);
    }

    const removeSession = async (id) => {
        setLoading(true);
        await axios.delete(`${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/account/sessions/${id}`, {headers: {authorization: "Bearer " + sessionData.accessToken}});
        await getSessions()
        notifications.show({
            title: t('common:success'),
            message: t('sessions.invalidationSuccess'),
        })
    }

    return (
        <>
            <Title mb={"xl"} size={"h3"}>{t('profilePage.navigation.sessions')}</Title>
            <Box w={"100%"}>
                <Skeleton animate visible={loading} height={100}>
                    {
                        data.map((session, idx) => {
                            return (
                                <DeviceCard session={session} removeSession={removeSession} key={idx}/>
                            )
                        })
                    }

                </Skeleton>
            </Box>
        </>
    )
}

const LinksPage = ({data: sessionData, t}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        getSessions();
    }, []);

    const getSessions = async () => {
        setLoading(true);
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/@me/links`, {headers: {authorization: "Bearer " + sessionData.accessToken}});
        setData(response)
        setLoading(false);
    }


    return (
        <>
            <Title mb={"xl"} size={"h3"}>{t('profilePage.navigation.links')}</Title>
            <Box w={"100%"}>
                <Skeleton animate visible={loading} height={100}>
                    <DiscordCard sessionData={sessionData}
                                 isLinked={data.filter((l) => l.type === "DISCORD").length > 0}
                                 data={data.filter((l) => l.type === "DISCORD")[0]} reload={getSessions}/>
                    <MinecraftCard isLinked={data.filter((l) => l.type === "MINECRAFT").length > 0}
                                   data={data.filter((l) => l.type === "MINECRAFT")[0]} reload={getSessions}/>

                </Skeleton>
            </Box>
        </>
    )
}

const DeviceCard = ({session, removeSession}) => {

    const {t} = useTranslation("profile");
    const getBrowserIcon = (b) => {
        switch (b) {
            case "Chrome":
                return <IconBrandChrome size="2.5em"/>;
            case "Firefox":
                return <IconBrandFirefox size="2.5em"/>;
            case "Mobile Safari":
                return <IconBrandSafari size="2.5em"/>;
            default:
                return <IconQuestionCircle size="2.5em"/>;
        }
    }
    const getOSIcon = (b) => {
        switch (b) {
            case "Windows":
                return <IconBrandWindows/>;
            case "Linux":
                return <IconBrandDebian/>;
            case "iOS":
                return <IconBrandApple/>;
            default:
                return <IconQuestionCircle/>;
        }
    }

    const invalidateSession = (id) => {
        modals.openConfirmModal({
            title: t('common:attention'),
            children: (
                <Text size="sm">
                    {t('sessions.sureInvalidation')}
                </Text>
            ),
            confirmProps: {color: 'red'},
            labels: {confirm: t('common:confirm'), cancel: t('common:cancel')},
            onConfirm: () => {
                removeSession(id)
            },
        });
    }

    return (
        <>
            {session.sessions.map((s, idx) => {
                return (
                    <Card mb={"md"} key={idx}>
                        <Flex align={"center"} gap={"md"}>
                            {getBrowserIcon((s.browser).split("/")[0])}

                            <Flex gap={8} direction={"column"} style={{flex: 1}}>
                                <Flex align={"center"} gap={"xs"}>
                                    <Text weight={"bold"}>{s.ipAddress}</Text>
                                    {
                                        s.current && <Badge>{t('sessions.thisSession')}</Badge>
                                    }
                                </Flex>

                                <Flex align="center">
                                    {getOSIcon(session.os)}
                                    <Text ml={"xs"}>{session.os} {session.osVersion} - {s.browser}</Text>
                                </Flex>
                                <Group>
                                    <Text size={"sm"}>
                                        <b>{t('sessions.sessionStart')}</b>
                                        {' '}
                                        {dayjs.unix(s.started).format('DD.MM.YYYY HH:mm')}
                                    </Text>
                                    <Text size={"sm"}>
                                        <b>{t('sessions.sessionLastActive')}</b>
                                        {' '}
                                        {dayjs.unix(s.lastAccess).format('DD.MM.YYYY HH:mm')}</Text>
                                    <Text size={"sm"}>
                                        <b>{t('sessions.sessionExpires')}</b>
                                        {' '}
                                        {dayjs.unix(s.expires).format('DD.MM.YYYY HH:mm')}
                                    </Text>
                                </Group>
                            </Flex>
                            {
                                !s.current &&
                                <Tooltip label={t('sessions.logoutSession')}>
                                    <ActionIcon color={"red"} size={"lg"} onClick={() => invalidateSession(s.id)}>
                                        <IconX size={18}/>
                                    </ActionIcon>
                                </Tooltip>
                            }
                        </Flex>
                    </Card>
                )
            })}
        </>

    )
}

const PasswordCard = ({data}) => {

    const {t} = useTranslation("profile");

    const changePassword = () => {
        getPkce(50, (error, {challenge}) => {
            window.location = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}
                    /protocol/openid-connect/auth?client_id=website&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=openid&kc_action=UPDATE_PASSWORD&code_challenge=${challenge}&code_challenge_method=S256`
        });
    }

    return (
        <Card mb={"md"}>
            <Flex align={"center"} gap={"md"}>
                <IconKey/>

                <Flex gap={8} direction={"column"} style={{flex: 1}}>
                    <Text weight={"bold"}>{t('security.password')}</Text>
                    <Text size={"sm"}>
                        <b>{t('security.lastChange')}</b>
                        {' '}
                        {dayjs(data.userCredentialMetadatas[0].credential.createdDate).format('DD.MM.YYYY HH:mm')}
                    </Text>
                </Flex>
                <Button onClick={changePassword}>
                    {t('security.changePassword')}
                </Button>
            </Flex>
        </Card>
    )
}

const DiscordCard = ({isLinked, data, sessionData, reload}) => {
    const {t} = useTranslation("profile");
    const [discordLinkUrl, setDiscordLinkUrl] = useState("");
    const [unlinkLoading, setUnlinkLoading] = useState(false);

    async function hash(string) {
        const utf8 = new TextEncoder().encode(string);
        const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
        const base64Hash = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
        return base64Hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    const generateDiscordLinkURL = async () => {
        const nonce = crypto.randomUUID();
        const jwtData = jwtDecode(sessionData.accessToken);
        console.log(jwtData)
        //const jwtData = {};
        const input = nonce + jwtData.session_state + jwtData.azp + "discord";
        console.log(input)
        const digest = await hash(input);
        const link = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/broker/discord/link?client_id=website&redirect_uri=${encodeURIComponent(window.location.href)}&nonce=${nonce}&hash=${digest}`;
        setDiscordLinkUrl(link)
    }

    const unlink = async () => {
        setUnlinkLoading(true);
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/account/linked-accounts/discord`, {headers: {authorization: "Bearer " + sessionData.accessToken}})
        } catch (e) {

        }
        await reload();
        setUnlinkLoading(false);

    }

    useEffect(() => {
        generateDiscordLinkURL();
    }, [])

    return (
        <Card mb={"md"}>
            <Flex align={"center"} gap={"md"}>
                <img src={"/discord.svg"} width={50} alt={"Discord"}/>

                <Flex gap={5} direction={"column"} style={{flex: 1}}>
                    <Flex align={"center"} gap={"xs"}>
                        <Text style={{fontWeight: "bold"}}>Discord</Text>
                        {
                            !isLinked && <Badge color={"red"}>{t('links.notLinked')}</Badge>
                        }
                    </Flex>
                    {
                        isLinked && <Text>{data.providerUsername}</Text>
                    }
                </Flex>
                {
                    isLinked ? <Button onClick={unlink} loading={unlinkLoading} leftIcon={<IconUnlink size={18}/>}>
                        {t('links.unlink')}
                    </Button> : <Button component={"a"} href={discordLinkUrl} disabled={!discordLinkUrl}
                                        leftIcon={<IconLink size={18}/>}>
                        {t('links.link')}
                    </Button>
                }
            </Flex>
        </Card>
    )
}

const MinecraftCard = ({isLinked, data, reload}) => {
    const {t} = useTranslation("profile");
    const [loading, setLoading] = useState(false);
    const {data: sessionData} = useSession()

    const unlink = async () => {
        setLoading(true)
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/links/minecraft`, {headers: {authorization: "Bearer " + sessionData.accessToken}})

        } catch (e) {
            console.error(e)
            showNotification({
                color: "red",
                title: t('common:error'),
                message: t('link.minecraft.unlinkError')
            })
            setLoading(false)
            return;
        }
        await reload();
        setLoading(false)
    }

    return (
        <Card mb={"md"}>
            <Flex align={"center"} gap={"md"}>
                <img src={"/minecraft.svg"} width={50} alt={"Minecraft"}/>

                <Flex gap={5} direction={"column"} style={{flex: 1}}>
                    <Flex align={"center"} gap={"xs"}>
                        <Text style={{fontWeight: "bold"}}>Minecraft</Text>
                        {
                            !isLinked && <Badge color={"red"}>{t('links.notLinked')}</Badge>
                        }
                    </Flex>
                    {
                        isLinked && <Text>{data.providerUsername}</Text>
                    }
                </Flex>
                {
                    isLinked ? <Button leftIcon={<IconUnlink size={18}/>} loading={loading} onClick={unlink}>
                            {t('links.unlink')}
                        </Button> :
                        <Button leftIcon={<IconLink size={18}/>} component={Link} href={"/profile/link/minecraft"}>
                            {t('links.link')}
                        </Button>
                }
            </Flex>
        </Card>
    )
}

const PlusPage = ({data, t}) => {

    const [loading, setLoading] = useState(true);
    const [accountData, setAccountData] = useState({});
    const [subData, setSubData] = useState({});


    const getUserData = async () => {
        setLoading(true);
        try {

            const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/@me`, {headers: {authorization: "Bearer " + data.accessToken}});
            if (response.stripeCustomerId) {
                const {data: subData} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/subscription`,  {headers: {"Authorization": "Bearer " + data.accessToken}})
                setSubData(subData)
            }
            setAccountData(response)

            setLoading(false);
        } catch (e) {
            signOut()
        }

    }

    const openPortal = async () => {
        // Redirect to the billing portal
        try {
            const {data: reqData} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/portal`,  {headers: {"Authorization": "Bearer " + data.accessToken}})
            window.location = reqData.url;
        } catch (e) {
            console.error(e)
        }
    }

    const sync = async () => {
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/plus/sync`,  {headers: {"Authorization": "Bearer " + data.accessToken}})
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <Title mb={"xl"} size={"h3"}>{t('profilePage.navigation.plus')}</Title>
            <Box w={"100%"}>
                <Skeleton animate visible={loading}>


                    <div className={"border border-neutral-600 w-full rounded-md p-4 flex justify-between items-center"}>


                        <div className={"flex gap-5 items-center"}>
                            <div className={`flex justify-center items-center w-12 h-12 rounded-full ${accountData.plus ? "bg-green-600/30": "bg-neutral-600"}`}>
                                <IconCrown size={30}/>
                            </div>
                            <div>
                                <Title size={"h4"}>{
                                    accountData.plus ? t('plus.active') : t('plus.inactive')
                                }</Title>
                                {
                                    (!accountData.stripeCustomerId && accountData.plus) &&
                                    <Text c={"dimmed"}>
                                        {t('plus.lifetime')}
                                    </Text>
                                }
                                {
                                    subData?.subscription?.plan?.interval &&
                                    <Text c={"dimmed"}>
                                        {
                                            subData.subscription.plan.interval === "year" ? t('plus.yearly') : t('plus.monthly')
                                        }

                                    </Text>
                                }
                                {
                                    subData?.subscription?.cancel_at ?
                                    <Text c={"dimmed"}>
                                        {t('plus.canceledAsOf')}
                                        {' '}
                                        {dayjs(subData.subscription?.cancel_at * 1000).format('DD.MM.YYYY')}
                                    </Text> : subData?.subscription?.current_period_end && <Text c={"dimmed"}>
                                            {t('plus.nextPayment')}
                                            {' '}
                                            {dayjs(subData.subscription?.current_period_end * 1000).format('DD.MM.YYYY')}
                                        </Text>
                                }

                            </div>
                        </div>

                        <div className={"flex items-center gap-2"}>
                            {
                                (accountData.stripeCustomerId && accountData.plus) && <Button onClick={openPortal}>
                                    {t('plus.manageSubscription')}
                                </Button>
                            }

                            {
                                (!accountData.plus) && <Button component={Link} href={"/store/plus"}>
                                    {t('plus.buy')}
                                </Button>
                            }
                            {
                                <ActionIcon onClick={sync} variant={"subtle"} className={"hidden"}>
                                    <IconRefresh style={{ width: '70%', height: '70%' }} stroke={1.5} />
                                </ActionIcon>
                            }
                        </div>

                    </div>
                </Skeleton>
            </Box>
        </>
    )
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'profile',
            ])),
        },
    }
}
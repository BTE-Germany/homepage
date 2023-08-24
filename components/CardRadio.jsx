import {Box, createStyles, Group, Tooltip} from "@mantine/core";
import {useTranslation} from "next-i18next";


const useStyles = createStyles((theme) => ({
    card: {
        color: "white",
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.md,
        borderRadius: theme.radius.sm,
        backgroundColor: theme.fn.rgba(theme.colors.gray[9], 0.4),
        border: `1.5px solid ${theme.colors.gray[8]}`,
        transition: "background 0.1s",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        '&:hover': {
            backgroundColor: theme.fn.rgba(theme.colors.gray[8], 0.7),
        },
        '&:disabled': {
            opacity: 0.5,
            '&:hover': {
                backgroundColor: theme.fn.rgba(theme.colors.gray[9], 0.4),
            },
        }
    },
    active: {
        backgroundColor: theme.fn.rgba(theme.colors.blue[9], 0.4),
        border: `1.5px solid ${theme.colors.blue[6]}`,
        '&:hover': {
            backgroundColor: theme.fn.rgba(theme.colors.blue[9], 0.6),
        }
    },
}));

export default function CardRadio({options, option, setOption, icon}) {
    const { classes, cx  } = useStyles();

    const {t} = useTranslation();

    return (
        <Group spacing={8}>
            {
                options.map((o) => {
                    if (o.unavailable) {
                        return (
                            <Tooltip label={t("common:notAvailable")} color="blue" withArrow>
                            <span>
                                <button disabled={o.unavailable} key={o.value} className={cx(classes.card, { [classes.active]: (option === o.value) })} onClick={() => setOption(o.value)}>
                                    {o.icon}
                                    {o.label}
                            </button>
                            </span>
                            </Tooltip>
                        )
                    } else {
                        return (

                                <button disabled={o.unavailable} key={o.value} className={cx(classes.card, { [classes.active]: (option === o.value) })} onClick={() => setOption(o.value)}>
                                    {o.icon}
                                    {o.label}
                            </button>

                        )
                    }

                })
            }
        </Group>
    );
}
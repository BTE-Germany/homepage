import {Box, Group, Text, Tooltip} from "@mantine/core";
import {useTranslation} from "next-i18next";
import classes from "./styles/CardRadio.module.css"
import cx from 'clsx';

/*
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
*/

export default function CardRadio({options, value, onChange ,grow}) {

    const {t} = useTranslation();

    return (
        <Group spacing={8} grow={grow}>
            {
                options.map((o, idx) => {
                    if (o.unavailable) {
                        return (
                            <Tooltip label={t("common:notAvailable")} withArrow key={idx} >
                            <span style={{width: "100%"}}>
                                <button style={{width: "100%"}} disabled={o.unavailable} key={o.value} className={cx(classes.card, { [classes.active]: (value === o.value) })} onClick={() => onChange(o.value)}>
                                    {o.icon}
                                    <Text fw={"bold"}>{o.label}</Text>
                            </button>
                            </span>
                            </Tooltip>
                        )
                    } else {
                        return (

                                <button disabled={o.unavailable} key={o.value} className={cx(classes.card, { [classes.active]: (value === o.value) })} onClick={() => onChange(o.value)}>
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
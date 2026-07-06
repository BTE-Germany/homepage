import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconBrandInstagram, IconBrandYoutube, IconBrandTiktok } from '@tabler/icons-react';

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full border-t mt-16 py-8 flex flex-col ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <div>
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} BuildTheEarth Germany e.V.
                    </p>
                    <p className="text-xs text-muted-foreground opacity-50 mt-1">
                        {t("notAffiliated")}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-end gap-2 mt-4 md:mt-0 ml-auto mr-8">
                    <Link href="https://www.youtube.com/@BTEGermany" target="_blank" className="rounded-full h-12 w-12 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors flex items-center justify-center">
                       <IconBrandYoutube stroke={2} />
                    </Link>
                    <Link href="https://www.instagram.com/btegermany/" target="_blank" className="rounded-full h-12 w-12 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors flex items-center justify-center">
                       <IconBrandInstagram stroke={2} />
                    </Link>
                    <Link href="https://www.tiktok.com/@btegermany" target="_blank" className="rounded-full h-12 w-12 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors flex items-center justify-center">
                       <IconBrandTiktok stroke={2} />
                    </Link>
                </div>
                <div className="flex flex-row gap-4 mt-4 md:mt-0">
                    <Link className="text-sm text-muted-foreground" href={"/legal"}>
                        {t("legalNotice")}
                    </Link>
                    <Link className="text-sm text-muted-foreground" href={"/privacy"}>
                        {t("privacyPolicy")}
                    </Link>
                    <Link className="text-sm text-muted-foreground" href={"/terms"}>
                        {t("termsAndConditions")}
                    </Link>
                    <Link
                        className="text-sm text-muted-foreground"
                        href={
                            "mailto:info@bte-germany.de?subject=Vertragskündigung&body=Hiermit möchte ich folgenden Vertrag kündigen:%0D%0A%0D%0AVertrag: [Vertragsname]%0D%0A%0D%0ABitte bestätigen Sie mir die Kündigung schriftlich.%0D%0A%0D%0AMit freundlichen Grüßen,%0D%0A[Ihr Name]"
                        }
                    >
                        {t("cancelSubscription")}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

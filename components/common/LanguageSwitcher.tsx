"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/i18n/locales";
import { useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const router = useRouter();

    const t = useTranslations("Navbar");

    function handleLocaleChange(newLocale: Locale): void {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <img
                    src={`https://cdn.bte-germany.de/general/flags/${locale}.svg`}
                    alt={locale}
                    className="w-6 h-6 rounded-lg object-cover"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleLocaleChange("de-DE")}>
                        Deutsch
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                        English
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import prom from "@/lib/prometheus";
import { getTranslations } from "next-intl/server";


async function getMinecraftWorldSize() {
    try {
        const data = await prom.instantQuery('sum(mc_world_size{job=~"terra-."})')
        return (data.result[0]?.value.value / 1000000000) || 0;
    } catch (e) {
        return 0;
    }
}

async function getFinishedArea() {
    try {
        const data = await fetch('https://map.bte-germany.de/api/v1/stats/general')
        const json = await data.json();
        return (json.totalFinishedArea / 1000000) || 0;
    } catch (e) {
        return 0;
    }

}

async function getBuildersCount() {
    try {
        const data = await fetch('https://api.buildtheearth.net/api/v1/buildteams/374b0e08-9ef5-4d1c-9a5c-3dc204d9fd96')
        const json = await data.json();
        return json._count.members || 0;
    } catch (e) {
        return 0;
    }
}

export default async function Stats() {

    const worldSize = await getMinecraftWorldSize();
    const finishedArea = await getFinishedArea();
    const builders = await getBuildersCount();
    const t = await getTranslations('Home.stats');


    return (
        <section className="container mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">

                <div className="flex items-center flex-col gap-4">
                    <div className="flex flex-row items-end justify-center gap-2">
                        <SlidingNumber number={builders} className="text-4xl sm:text-5xl md:text-6xl font-bold" thousandSeparator="." />

                    </div>
                    <p className="text-base sm:text-lg text-neutral-400">{t('builders')}</p>
                </div>

                <div className="flex items-center flex-col gap-4">
                    <div className="flex flex-row items-end justify-center gap-2">
                        <SlidingNumber number={finishedArea} className="text-4xl sm:text-5xl md:text-6xl font-bold" />
                        <p className="font-bold text-xl sm:text-2xl text-neutral-400">km²</p>
                    </div>
                    <p className="text-base sm:text-lg text-neutral-400">{t('totalArea')}</p>
                </div>

                <div className="flex items-center flex-col gap-4">
                    <div className="flex flex-row items-end justify-center gap-2">
                        <SlidingNumber number={worldSize} className="text-4xl sm:text-5xl md:text-6xl font-bold" />
                        <p className="font-bold text-xl sm:text-2xl text-neutral-400">GB</p>
                    </div>
                    <p className="text-base sm:text-lg text-neutral-400">{t('worldSize')}</p>
                </div>

            </div>
        </section>
    );
}

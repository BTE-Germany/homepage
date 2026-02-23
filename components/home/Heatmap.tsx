"use client";

import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import getHeatmapData from "@/lib/map";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { DeckGL } from "@deck.gl/react";
import { motion } from "motion/react";

export default function Heatmap() {
    const layer = new HeatmapLayer<{
        coords: [longitude: number, latitude: number];
        area: number;
    }>({
        id: "HeatmapLayer",
        data: getHeatmapData(),

        aggregation: "SUM",
        getPosition: (d) => [d.coords[1], d.coords[0]],
        getWeight: (d) => d.area,
        radiusPixels: 25,
        intensity: 1,
        colorRange: [
            [166, 189, 219],
            [166, 189, 219],
            [166, 189, 219],
            [116, 169, 207],
            [43, 140, 190],
            [4, 90, 141],
        ],

        threshold: 0.4,
    });

    return (
        <motion.div
            className="w-full md:w-1/2 h-72 sm:h-96 md:h-128 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.03, 0.72, 0.04, 0.98], delay: 0.2 }}
        >
            <APIProvider apiKey="AIzaSyANhUgZFM7npYG33sj09nLMMNKyzfc7IiI">
                <DeckGL
                    initialViewState={{
                        longitude: 10.447683,
                        latitude: 51.163361,
                        zoom: 4.5,
                        minZoom: 4,
                        maxZoom: 8,
                    }}
                    controller
                    layers={[layer]}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Map
                        colorScheme="DARK"
                        defaultCenter={{ lat: 51.163361, lng: 10.447683 }}
                        defaultZoom={6}
                        mapId="69322285d0a74f5488e41f49"
                    ></Map>
                </DeckGL>
            </APIProvider>
        </motion.div>
    );
}

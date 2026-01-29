export default async function getHeatmapData() {
    const response = await fetch('https://map.bte-germany.de/api/v1/region/all/coords');
    const data = await response.json();
    return data;
}
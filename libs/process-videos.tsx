import { VideosByCountry, Video } from '../types/interfaces';

const videoSource = process.env.NEXT_PUBLIC_VIDEO_SOURCE || '';

function parseLocations(country: string) {
    const locations = (process.env[`NEXT_PUBLIC_LOCATIONS_${country.toUpperCase()}`] || '').split(',');

    return locations.reduce((acc: Video[], location: string) => {
        const [name, source] = location.split('|');
        acc.push({ name, source: videoSource?.replace('__country__', country).replace('__location__', source) });

        return acc;
    }, []);
}

export default function processVideos(): VideosByCountry {
    const countries = (process.env.NEXT_PUBLIC_COUNTRIES || '').split(',');

    const videosByCountry: VideosByCountry = countries.reduce((acc: VideosByCountry, country: string) => {
        acc[country] = parseLocations(country);
        return acc;
    }, {});

    return videosByCountry;
}

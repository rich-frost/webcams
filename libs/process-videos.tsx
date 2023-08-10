import { VideosByRegion, Video, WebcamLocation } from '../types/interfaces';

const videoSource = process.env.NEXT_PUBLIC_VIDEO_SOURCE || '';

function parseLocations({ name, country }: WebcamLocation) {
  const locations = (
    process.env[`NEXT_PUBLIC_LOCATIONS_${name.toUpperCase()}`] || ''
  ).split(',');

  return locations.reduce((acc: Video[], location: string) => {
    const [name, source] = location.split('|');
    acc.push({
      name,
      source: videoSource
        ?.replace('__country__', country)
        .replace('__location__', source),
    });

    return acc;
  }, []);
}

export default function processVideos(): VideosByRegion {
  const regions = (process.env.NEXT_PUBLIC_REGIONS || '').split(',');

  const VideosByRegion: VideosByRegion = regions.reduce(
    (acc: VideosByRegion, region: string) => {
      const [name, country] = region.split('|');
      acc[name] = parseLocations({ name, country });
      return acc;
    },
    {},
  );

  return VideosByRegion;
}

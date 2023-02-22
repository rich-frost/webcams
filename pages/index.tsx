import React from 'react';
import TabContent from '../components/tab-content';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import processVideos from '../libs/process-videos';
import { VideosByCountry, Video } from '../types/interfaces';

export async function getStaticProps() {
    const videosByCountry = processVideos();

    return {
        props: {
            videosByCountry,
        },
    };
}

export default function Index({ videosByCountry }: VideosByCountry) {
    return (
        <Tabs size="md" variant="soft-rounded" isFitted>
            <TabList>
                {Object.keys(videosByCountry).map((country) => (
                    <Tab key={country}>{country}</Tab>
                ))}
            </TabList>

            <TabPanels>
                {Object.entries(videosByCountry).map(([country, videos]) => (
                    <TabPanel key={country}>
                        <TabContent videos={videos as any} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}

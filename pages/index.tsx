import React from 'react';
import TabContent from '../components/tab-content';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import processVideos from '../libs/process-videos';
import { VideosByRegion, Video } from '../types/interfaces';

export async function getStaticProps() {
  const videosByRegion = processVideos();

  return {
    props: {
      videosByRegion,
    },
  };
}

export default function Index({ videosByRegion }: VideosByRegion) {
  return (
    <Tabs size="md" variant="soft-rounded" isFitted>
      <TabList>
        {Object.keys(videosByRegion).map((country) => (
          <Tab key={country}>{country}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {Object.entries(videosByRegion).map(([country, videos]) => (
          <TabPanel key={country}>
            <TabContent videos={videos as any} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

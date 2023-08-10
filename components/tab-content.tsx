import { VStack } from '@chakra-ui/react';
import { Video } from '../types/interfaces';
import VideoPlayer from './video-player';

type TabContentProps = {
  videos: Video[];
};

function TabContent({ videos }: TabContentProps) {
  return (
    <VStack spacing={2} align="stretch">
      {videos.map((video: Video) => (
        <VideoPlayer key={video.name} name={video.name} source={video.source} />
      ))}
    </VStack>
  );
}

export default TabContent;

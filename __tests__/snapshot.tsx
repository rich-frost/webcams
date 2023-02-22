import { render } from '@testing-library/react';

import Index from '../pages/index';
import { VideosByCountry } from '../types/interfaces';

const videosByCountry: VideosByCountry = {
    spain: [{ name: 'Madrid', source: 'https://mydomain.com/madrid.vid' }],
};
it('renders main page', () => {
    const { container } = render(<Index videosByCountry={videosByCountry} />);
    expect(container).toMatchSnapshot();
});

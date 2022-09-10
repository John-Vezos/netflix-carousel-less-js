import H1 from '@src/components/H1';

import packageJson from '../../../package.json';

const HomePage = () => {
  return (
    <div>
      <H1>IT WORKS</H1>

      <div>
        <a
          href="https://github.com/glook/webpack-typescript-react"
          target="_blank"
        >
          @glook/webpack-typescript-react ({packageJson.version})
        </a>
      </div>
    </div>
  );
};
export default HomePage;

import ThemeToggle from '@src/containers/ThemeToggle';

import H1 from '../H1';
import Wrapper from './Wrapper';

const LOGO = 'HEADER';

const Header = () => {
  return (
    <Wrapper>
      <H1>{LOGO}</H1>
      <ThemeToggle />
    </Wrapper>
  );
};

export default Header;

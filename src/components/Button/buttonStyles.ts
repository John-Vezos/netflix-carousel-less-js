import { css } from '@styles/styled-components';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 64px;
  padding: 22px;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryBackground};
`;

export default buttonStyles;

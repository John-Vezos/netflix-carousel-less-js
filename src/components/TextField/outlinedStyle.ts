import { css } from '@styles/styled-components';

const outlinedStyle = css`
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};

  border-radius: 4px;
  width: 100%;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 5px;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #3f51b5;
      font-weight: 600;
    }
    padding-bottom: 6px;
    border-width: 3px;
    border-color: #3f51b5;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export default outlinedStyle;

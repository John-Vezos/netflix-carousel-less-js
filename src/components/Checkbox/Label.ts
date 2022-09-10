import styled from '@styles/styled-components';

const Label = styled.label`
  color: var(--checkbox-color);
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &::before {
    height: 2px;
    width: 8px;
    left: -27px;
    background: var(--checkbox-check);
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  &:after {
    height: 4px;
    width: 4px;
    top: calc(50% - 4px);
    left: -25px;
    border-radius: 50%;
  }
`;

export default Label;

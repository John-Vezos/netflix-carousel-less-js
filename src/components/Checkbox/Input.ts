import styled, { keyframes } from '@styles/styled-components';

import Label from './Label';
import Span from './Span';

const move = keyframes`
  50% {
    padding-left: 8px;
    padding-right: 0;
  }
  100% {
    padding-right: 4px;
    font-weight: 600;
  }
`;

const check_01 = keyframes`  

  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0;
    top: 8px;
    transform: rotate(45deg);
}
  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
}
`;

const check_02 = keyframes`
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0;
    top: 8px;
    transform: rotate(-45deg);
  }
  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }`;

const firework = keyframes`

  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;
}
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;
}
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;

  display: grid;
  align-items: center;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    top: auto;
    background: var(--checkbox-check);
    border-radius: 2px;
  }
  &::before {
    width: 0;
    right: 60%;
    transform-origin: right bottom;
  }
  &::after {
    width: 0;
    left: 40%;
    transform-origin: left bottom;
  }

  &:checked {
    &::before {
      animation: ${check_01} 0.4s ease forwards;
    }
    &::after {
      animation: ${check_02} 0.4s ease forwards;
    }
    + ${Label} {
      animation: ${move} 0.3s ease 0.1s forwards;

      ${Span} {
        background-size: 100% 2px;
        color: inherit;
      }

      &::before {
        transition: width 0.2s ease;
        width: 0;
      }
      &::after {
        animation: ${firework} 0.5s ease forwards 0.1s;
      }
    }
  }
`;

export default Input;

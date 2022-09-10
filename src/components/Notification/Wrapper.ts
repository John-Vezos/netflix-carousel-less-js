import styled, { css } from '@styles/styled-components';
interface Props {
  status?: string;
}

export const Wrapper = styled.section<Props>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 10%;
  margin: 0;
  font-size: 1rem;
  z-index: 100;
  cursor: pointer;

  border: 1px solid rgba(6, 44, 241, 0.46);
  background-color: rgba(7, 73, 149, 0.12156862745098039);
  box-shadow: 0 0 2px #0396ff;
  color: #0396ff;
  text-shadow: 0.5px 0.5px #00040a;

  &:hover {
    background-color: rgba(7, 73, 149, 0.35);
  }

  & strong {
    margin-right: 5px;
  }
  & svg {
    position: absolute;
    right: 5%;
    top: 12.5px;
  }

  ${props =>
    props.status === 'success' &&
    css`
      &&& {
        border: 1px solid rgba(36, 241, 6, 0.46);
        background-color: rgba(7, 149, 66, 0.12156862745098039);
        box-shadow: 0 0 2px #259c08;
        color: #0ad406;
      }

      &&&:hover {
        background-color: rgba(7, 149, 66, 0.35);
      }
    `};

  ${props =>
    props.status === 'error' &&
    css`
      &&& {
        border: 1px solid rgba(241, 6, 6, 0.81);
        background-color: rgba(220, 17, 1, 0.16);
        box-shadow: 0 0 2px #ff0303;
        color: #ff0303;
      }

      &&&:hover {
        background-color: rgba(220, 17, 1, 0.33);
      }
    `};

  ${props =>
    props.status === 'warning' &&
    css`
      &&& {
        border: 1px solid rgba(241, 142, 6, 0.81);
        background-color: rgba(220, 128, 1, 0.16);
        box-shadow: 0 0 2px #ffb103;
        color: #ffb103;
      }

      &&&:hover {
        background-color: rgba(220, 128, 1, 0.33);
      }
    `};

  ${props =>
    props.status === 'well' &&
    css`
      &&& {
        border: 1px solid rgba(6, 241, 226, 0.81);
        background-color: rgba(1, 204, 220, 0.16);
        box-shadow: 0 0 2px #03fff5;
        color: #03d0ff;
      }

      &&&:hover {
        background-color: rgba(1, 204, 220, 0.33);
      }
    `};
`;

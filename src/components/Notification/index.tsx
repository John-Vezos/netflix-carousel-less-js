import ReactDOM from 'react-dom';

import SvgCloseX from '@components/Notification/CloseX';

import { Wrapper } from './Wrapper';

interface Props {
  status?: string;
  title?: string;
  message?: string;
  onClick?(): void;
}
const Notification = ({ status, title, message, onClick }: Props) => {
  return ReactDOM.createPortal(
    <Wrapper status={status} onClick={onClick}>
      <pre>
        <strong>{title}</strong>
        {message}
      </pre>
      <SvgCloseX />
    </Wrapper>,
    document?.getElementById('overlay-root') || document.createElement('div'),
  );
};

export default Notification;

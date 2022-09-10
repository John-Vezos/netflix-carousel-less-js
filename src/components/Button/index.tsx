/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children, ReactNode } from 'react';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

export interface Props {
  handleRoute?(): void;
  href?: string;
  onClick?(): void;
  children?: ReactNode;
}
const Button = ({ handleRoute, href, onClick, children }: Props) => {
  // Render an anchor tag
  let button = (
    <A href={href} onClick={onClick}>
      {Children.toArray(children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (handleRoute) {
    button = (
      <StyledButton onClick={handleRoute}>
        {Children.toArray(children)}
      </StyledButton>
    );
  }

  return <Wrapper>{button}</Wrapper>;
};

export default Button;

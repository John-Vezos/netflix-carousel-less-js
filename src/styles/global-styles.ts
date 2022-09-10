import FontsStyle from '@styles/fontStyles';
import TemplateStyles from '@styles/templateStyles';

import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  ${FontsStyle}
  ${TemplateStyles}
  
  :root {
    --font-size-peta: 3.04rem;
    --font-size-tera: 2.44rem;
    --font-size-giga: 1.95rem;
    --font-size-mega: 1.56rem;
    --font-size-kilo: 1.25rem;
    --font-size-hecto: 1rem;
    --font-size-centi: .8rem;
    --font-size-milli: .64rem;
    
    --line-height-default: 1.5;
    
    --font-size-default: 18px;
    --font-size-mobile-default: 16px;
    
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primaryBackground};
    min-height: 100%;
    min-width: 100%;

    font-size: var(--font-size-default);
    line-height: 1.34;
  }

  
  label,
  button {
    font-size: var(--font-size-default);
    line-height: 1.34;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  
 
  
  @media only screen and (max-width: 767px) {
    :root,
    label,
    button {
      font-size: var(--font-size-mobile-default);
    }
  }
`;

export default GlobalStyle;

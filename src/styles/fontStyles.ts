import { css } from '@styles/styled-components';

const FontsStyle = css`
  p,
  label,
  body {
    font-family: SourceSerif, Georgia, Times, 'Times New Roman', serif;
  }
  
  pre,
  textarea {
    font-family: inherit;
  }

  body.fontLoaded,
  button {
    font-family: Averta, 'Open Sans', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Averta, 'Open Sans', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default FontsStyle;

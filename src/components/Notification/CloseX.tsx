import * as React from 'react';

const SvgCloseX: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> = props => (
  <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.145 1 13 12.855M13 1 1 12.855"
      stroke="currentColor"
      strokeWidth={'2px'}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    />
  </svg>
);

export default SvgCloseX;

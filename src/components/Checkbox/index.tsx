import { FunctionComponent, InputHTMLAttributes, forwardRef } from 'react';

import Input from './Input';
import Label from './Label';
import Span from './Span';
import Wrapper from './Wrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <Wrapper>
        <Input {...props} ref={ref} />
        <Label htmlFor={props?.id}>
          <span>
            <Span>{label}</Span>
          </span>
        </Label>
      </Wrapper>
    );
  },
);

export default Checkbox;

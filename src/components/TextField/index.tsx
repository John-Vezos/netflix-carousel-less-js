import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

import Label from '@components/TextField/Label';
import outlinedStyle from '@components/TextField/outlinedStyle';
import Wrapper from '@components/TextField/Wrapper';

import styled from '@styles/styled-components';

// type Modify<T, R> = Omit<T, keyof R> & R;
//
// interface ModifiedType
//   extends Modify<
//     InputHTMLAttributes<HTMLInputElement>,
//     {
//       label?: string;
//       onChange?: (text: string) => void;
//       maxWidth?: string;
//       variant?: string;
//     }
//   > {}

interface PropsName {
  variant?: string;
}
const InputStyle = styled.input<PropsName>`
  ${props => props.variant === 'outlined' && outlinedStyle}
`;

const TextareaStyle = styled.textarea<PropsName>`
  ${props => props.variant === 'outlined' && outlinedStyle}
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxWidth?: string;
  variant?: string;
  multiline?: boolean;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  maxWidth?: string;
  variant?: string;
  multiline?: boolean;
}

const TextField = forwardRef<any, InputProps & TextareaProps>(
  ({ label, maxWidth, variant, multiline, ...props }, ref) => (
    <Wrapper maxWidth={maxWidth}>
      {!multiline && <InputStyle {...props} variant={variant} ref={ref} />}

      {multiline && (
        <TextareaStyle {...props} ref={ref} rows={5} maxLength={500} />
      )}

      <Label htmlFor={props?.id}>{label}</Label>
    </Wrapper>
  ),
);

export default TextField;

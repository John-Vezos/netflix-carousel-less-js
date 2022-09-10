import styled from '@styles/styled-components';

const Span = styled.span`
  position: relative;
  text-decoration: none;
  background-image: linear-gradient(
    var(--checkbox-check),
    var(--checkbox-check)
  );
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0 0;
  transition: background-size 0.3s ease;
`;

export default Span;

import styled from 'styled-components';

// React Styled Component 123
export const StyledA11yHidden = styled.span`
  overflow: ${(props) => {
    return !props.focusable ? 'auto' : 'hidden';
  }};
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

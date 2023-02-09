import styled from 'styled-components';

export const FileInput = styled.div<{ error?: boolean | string }>`
  border-color: transparent;
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#42b0a820'};
  box-shadow: 3px 4px 10px
    ${(props) => (props.error ? 'rgba(252, 165, 165, 0.25)' : '#42b0a880')};
  &:focus,
  &:focus-within {
    border-color: #42b0a8;
    background-color: #42b0a820;
    box-shadow: 3px 4px 10px #42b0a850;
  }
`;

import styled from 'styled-components';

export const FileInput = styled.div<{ error?: boolean | string }>`
  border-color: transparent;
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#42b0a820'};
  box-shadow: none;
  &:focus,
  &:focus-within {
    border-color: #42b0a8;
    background-color: #42b0a820;
    box-shadow: none;
  }
`;

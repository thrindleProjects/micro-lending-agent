import styled, { css } from 'styled-components';

export const MainInput = styled.input<{
  error?: boolean | string;
  type: string;
  value: string | number | readonly string[] | undefined;
}>`
  border-color: ${(props) => (props.error ? 'rgb(252, 165, 165)' : '#42B0A8')};
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#42B0A820'};
  box-shadow: 3px 4px 10px
    ${(props) => (props.error ? 'rgba(252, 165, 165, 0.25)' : '#42B0A880')};
  &:focus {
    border-color: #718096;
    background-color: #71809620;
    box-shadow: 3px 4px 10px #71809650;
  }
  ${(props) =>
    props.type === 'date' &&
    css`
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
    `}
  ${(props) =>
    (props.error ||
      !props.value ||
      (props.value &&
        typeof props.value === 'string' &&
        !props.value.length)) &&
    css`
      &:not(:focus):before {
        width: 100%;
        height: 100%;
        content: 'Choose date';
      }
    `}
`;

export const PasswordInput = styled.div<{ error?: boolean | string }>`
  &:focus-within {
    border-color: #718096;
    background-color: #71809620;
    box-shadow: 3px 4px 10px #71809650;
  }
  border-color: ${(props) => (props.error ? 'rgb(252, 165, 165)' : '#42B0A8')};
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#42B0A820'};
  box-shadow: 3px 4px 10px
    ${(props) => (props.error ? 'rgba(252, 165, 165, 0.25)' : '#42B0A880')};
`;

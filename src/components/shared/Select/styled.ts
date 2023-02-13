import styled from 'styled-components';

export const SelectInput = styled.select<{ error?: boolean | string }>`
  border-color: transparent;
  /* background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#42b0a820'}; */
  box-shadow: none;
  &:focus,
  &:focus-within {
    border-color: #42b0a8;
    background-color: #42b0a820;
    box-shadow: none;
  }
  background: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg')
      no-repeat center right 1rem / 1.5rem auto,
    ${(props) => (props.error ? 'rgba(252, 165, 165, 0.1)' : '#42b0a820')};
  content: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg');
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

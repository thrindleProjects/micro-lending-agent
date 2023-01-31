import styled from 'styled-components';

export const SelectInput = styled.select<{ error?: boolean | string }>`
  border-color: ${(props) => (props.error ? 'rgb(252, 165, 165)' : '#88c3c1')};
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#88c3c120'};
  box-shadow: 3px 4px 10px
    ${(props) => (props.error ? 'rgba(252, 165, 165, 0.25)' : '#88c3c180')};
  &:focus,
  &:focus-within {
    border-color: #718096;
    background-color: #71809620;
    box-shadow: 3px 4px 10px #71809650;
  }
  background: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg')
    no-repeat center right 1rem / 1.5rem auto;
  content: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg');
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

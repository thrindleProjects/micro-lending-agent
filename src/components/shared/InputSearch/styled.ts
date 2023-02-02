import styled from 'styled-components';

export const InputSearchBar = styled.input.attrs({ type: 'text' })`
  width: 100%;
  background: url('https://api.iconify.design/uil/search.svg') no-repeat top 50%
      left 1rem,
    linear-gradient(0deg, rgba(0, 134, 54, 0.08), rgba(0, 134, 54, 0.08)),
    #ffffff;
  border: 1px solid #63738120;
  padding-left: 2.5rem;

  @media (min-width: 640px) {
    background: url('https://api.iconify.design/uil/search.svg') no-repeat top
        50% left 2rem,
      linear-gradient(0deg, rgba(0, 134, 54, 0.08), rgba(0, 134, 54, 0.08)),
      #ffffff;
    padding-left: 3.5rem;
  }
  @media (min-width: 768px) {
    background: url('https://api.iconify.design/uil/search.svg') no-repeat top
        50% left 2rem,
      linear-gradient(0deg, rgba(0, 134, 54, 0.08), rgba(0, 134, 54, 0.08)),
      #ffffff;
    padding-left: 4rem;
  }
`;

import styled from 'styled-components';

export const CheckBVNModalWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  @media (min-width: 1024px) {
    height: max-content;
  }
`;

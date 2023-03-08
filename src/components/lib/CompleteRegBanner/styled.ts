import styled from 'styled-components';

export const CompleteRegBanner = styled.section`
  background: url('/assets/svg/complete-reg-bg-mobile.svg') no-repeat right
      bottom / auto 55%,
    rgb(66, 176, 168);

  @media (min-width: 768px) {
    background: url('/assets/svg/complete-reg-bg.svg') no-repeat right center/
        auto 100%,
      rgb(66, 176, 168);
  }
`;

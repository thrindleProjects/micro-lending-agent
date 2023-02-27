import styled from 'styled-components';

export const ProgressBarStyle = styled.div<{ progress: number | undefined }>`
  background: linear-gradient(
      0deg,
      rgba(66, 176, 168, 0.08),
      rgba(66, 176, 168, 0.08)
    ),
    #ffffff;

  .progress_bar {
    width: ${(props) =>
      typeof props.progress === 'number' ? `${props.progress}%` : '0%'};
  }
`;

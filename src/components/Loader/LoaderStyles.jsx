import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: ${({ size }) => size || 40}px;
  height: ${({ size }) => size || 40}px;
  animation: ${spinAnimation} 1s linear infinite;
`;

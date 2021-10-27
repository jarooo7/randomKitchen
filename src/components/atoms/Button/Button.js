import styled, { css } from 'styled-components';

const Button = styled.button`
  overflow: hidden;
  cursor: pointer;
  z-index: 0;
  position: relative;
  min-height: 32px;
  min-width: 100px;
  padding: 15px 35px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white10alfa};
  box-shadow: inset 0 0 20px ${({ theme }) => theme.color.white30alfa};
  background: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.font.semibold};
  text-decoration: none;

  &:before {
    content: '';
    opacity: 1;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.white10alfa};
    box-shadow: 0 0 40px ${({ theme }) => theme.color.white10alfa};
    width: 300%;
    height: 300%;
    transform: scale(0);
    transition: all 1s;
  }

  &:hover {
    &:before {
      transform: scale(1.5);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ radius }) =>
    radius &&
    css`
      border-radius:16px 12px 25px 12px ;
    `}
`;

export default Button;

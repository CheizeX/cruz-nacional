import styled from 'styled-components';

export const StyledCardEmpty = styled.div`
  width: 30rem;
  height: 16.25rem;
  margin: auto;
  background-color: #f5f5f5;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  & > div {
    height: 7.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    & > :nth-child(1) {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 1.875rem;
      & > div {
        & * {
          & svg {
            width: 2rem;
            height: 2.125rem;
            & > :first-child {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[6]};
              }
            }
          }
        }
      }
    }
    & > :nth-child(2) {
      background-color: ${({ theme }) => theme.Colors.grays[6]};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 1.25rem;
      height: 1.25rem;
      justify-content: center;
      align-items: center;
      position: relative;
      right: 1rem;
      top: -0.125rem;
      padding-left: 0.3125rem;
      border: 0.125rem solid #f5f5f5;
      padding-left: 0.375rem;
      & > div {
        & * {
          & svg {
            width: 0.625rem;
            height: 0.625rem;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
              stroke: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
  }

  & > span {
    width: 14.6875rem;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.Colors.grays[6]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[16]};
    line-height: 1.1875rem;
  }
`;

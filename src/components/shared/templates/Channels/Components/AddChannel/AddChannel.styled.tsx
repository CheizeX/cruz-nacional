import styled from 'styled-components';

export const StyledWrapperAddChannel = styled.div`
  width: 37rem;
  height: 32rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 1.25rem 0 1.12rem 0;
`;
export const StyledHeaderAddChannel = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-left: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 1rem;
  }
  & > button {
    width: 2.1rem;
    height: 1rem;
    & > div {
      & * {
        & > svg {
          width: 0.75rem;
          height: 0.8rem;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;
export const StyledBodyAddChannel = styled.div`
  height: 23rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  & > :first-child {
    width: 15rem;
    background-blend-mode: lighten;
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    background-image: url('/images/Background_Modal.svg');
    background-size: 15.9rem 23.1rem;
  }
  & > :last-child {
    width: 19rem;
    height: 22rem;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    margin: 0.8rem auto;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
      justify-content: flex-start;
      display: flex;
      padding-left: 2rem;
    }
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      width: 19rem;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      height: 20rem;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 0.4rem;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      & > div {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        & > button {
          width: 5.5rem;
          height: 5.5rem;
          background-color: ${({ theme }) => theme.Colors.grays[10]};
          border-radius: 10px;
          margin-left: 0.6rem;
          margin-top: 0.6rem;
          &:hover {
            background-color: ${({ theme }) => theme.Colors.purples[1]};
            cursor: pointer;
            & > span {
              color: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
          & > div {
            width: 2.1rem;
            height: 2.1rem;
            margin: auto;
            & * {
              & > svg {
                width: 2.1rem;
                height: 2.1rem;
              }
            }
          }
          & > span {
            color: ${({ theme }) => theme.Colors.grays[1]};
          }
        }
      }
    }
  }
`;
export const StyledFooterAddChannel = styled.div`
  display: flex;
  height: 3.3rem;
  align-items: flex-end;
  padding-right: 0.9rem;
  justify-content: flex-end;
`;

import styled from 'styled-components';

export const StyledWrapperModal = styled.div`
  width: 16.2rem;
  height: 13.7rem;
  margin: auto;
  padding: 1.12rem 0.75rem 0 0.75rem;
  margin-top: 0.6rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > span {
    display: flex;
    text-align: start;
    align-items: center;
    justify-content: flex-start;
    padding-left: 14px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 14px;
  }
  & > div {
    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }
`;

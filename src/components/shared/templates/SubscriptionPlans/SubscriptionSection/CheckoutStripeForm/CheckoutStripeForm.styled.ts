import styled from 'styled-components';

export const StyledStripePaymentMethod = styled.form`
  min-width: 340px;
  width: 445px;
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.Colors.grays[9]};
  color: ${({ theme }) => theme.Colors.grays[1]};
  border-radius: 17px;
  position: absolute;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  z-index: 1;

  & > :nth-child(1) {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 21px;
    right: 22px;
    & * :hover {
      cursor: pointer;
      fill: ${({ theme }) => theme.Colors.grays[3]};
    }
    & svg {
      width: 16px;
      height: 16px;
    }
  }
  & > :nth-child(2) {
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    text-align: left;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > :nth-child(3) {
    height: 50px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.Colors.grays[7]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 30px;
  }
  & > :nth-child(4) {
    height: 40px;
    width: 100%;
  }
`;

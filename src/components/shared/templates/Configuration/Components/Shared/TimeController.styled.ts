import styled from 'styled-components';

export const StyledStartTimeController = styled.main`
  max-width: 150px;
  hieight: 132px;
  position: absolute;
  z-index: 1;
  top: 153px;
  left: 10px;
`;
export const StyledEndTimeController = styled.main`
  max-width: 150px;
  hieight: 132px;
  position: absolute;
  z-index: 1;
  top: 233px;
  left: 10px;
`;
export const StyledTimeController = styled.div`
  width: 150px !important;
  height: 130px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-evenly;
`;
export const StyledSeparator = styled.div`
  height: 100%;
  width: 10px;
  display: flex: 
  align-items: center;
  justify-content: center;
  padding:57px 0;
  font-size:14px;
  font-weight:800;
  `;
export const StyledCounterContainer = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px !important;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const StyledCounterController = styled.input`
  margin: 0 auto;
  border: none;
  width: 50px;
  height: 32px;
  border-radius: 27px;
  appearance: none;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  outline: none;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &: focus {
    border: 1px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;
export const StyledCounterControllerButton = styled.button`
  margin: 0 auto;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  appearance: none;
  background-color: ${({ theme }) => theme.Colors.purples[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  &: hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.Colors.purples[2]};
  }
  &: active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.Colors.purples[1]};
  }
  & > div {
    width: 24px;
    height: 24px;
    & > div {
      width: 24px;
      height: 24px;
      & > div {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > svg {
          & * {
            fill: ${({ theme }) => theme.Colors.grays[10]};
          }
          width: 24px;
          height: 8px;
        }
      }
    }
  }
`;

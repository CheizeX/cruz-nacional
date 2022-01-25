import styled, { css } from 'styled-components';
import { IButtonProp } from './EditUsers.interface';

export const ContainerEditUsers = styled.div`
  width: 341px;
  height: fit-content;
  border-radius: 10px;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 0;
`;

// export const StyledRealFunctionalRadiosContainerEdit = styled.div`
//   width: 295px;
//   transform: translate(14px, -4px);
//   position: absolute;
//   opacity: 0; //oculta los inputs de los radios
//   & input {
//     width: 24px;
//     height: 24px;
//   }
//   & > :first-child {
//     transform: translate(8px, 1px);
//   }
//   & > :last-child {
//     transform: translate(120px, 1px);
//   }
// `;

export const StyledVisualContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  & span {
    transform: translateX(-20px);
  }
`;
export const StyledRealFunctionalRadiosContainerEdit = styled.div`
  width: 295px;
  transform: translate(14px, -4px);
  position: absolute;
  opacity: 0; //oculta los inputs de los radios
  & input {
    width: 24px;
    height: 24px;
  }
  & > :first-child {
    transform: translate(8px, 1px);
  }
  & > :last-child {
    transform: translate(120px, 1px);
  }
`;

export const StyledVisualContainerEditUser = styled.div`
  display: flex;
`;

export const StyledButton = styled.div<IButtonProp>`
  border-radius: 50%;
  width: 24px;
  min-height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 7px;
  ${({ focusedCheck }) =>
    focusedCheck &&
    css<IButtonProp>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;

export const StyledRadio = styled.div<IButtonProp>`
  height: 14px;
  width: 14px;
  max-height: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  display: flex;
  margin: auto;
  align-content: center;
  text-align: center;
  position: relative;
  top: 3px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  ${({ focusedCheck }) =>
    focusedCheck &&
    css<IButtonProp>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;
export const StyledWrapperRadio = styled.button<IButtonProp>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;

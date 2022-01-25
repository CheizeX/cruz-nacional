import styled, { css } from 'styled-components';
import { StyledEditUserTagColorCheckboxProps } from './EditUserTagModal.interface';

export const StyledModalEditUserTag = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 512px;
  width: 341px;
`;

export const StyledEditUserTagModalHeader = styled.div`
  align-items: center;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 21px;
  width: 100%;
  & > span {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
  }
  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledEditUserTagModalBody = styled.div`
  background: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 457px;
  padding: 20px;
  text-align: left;
  width: 100%;
  & p {
    margin-bottom: 24px;
    & span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    margin: 20px 0 20px 16px;
  }
  & > :nth-child(3) {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    margin: 2px 0 12px 0;
    & input {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    }
    & > button {
      display: none;
    }
  }
  & button {
    margin-top: 30px;
    width: 100%;
  }
`;

export const StyledEditUserTagModalColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-basis;
  margin-bottom: 30px;
  margin-top: 10px;
  min-height: 105px;
  width: 101%;
  & div {
    height: 39px;
    margin: 0 5.5px;
    width: 39px;
  }
`;

export const myOwnIfEdit = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledEditUserTagColorCheckbox = styled.div<StyledEditUserTagColorCheckboxProps>`
  background-color: ${({ name, theme }) =>
    myOwnIfEdit(name === '0', theme.Colors.blue[1], null) ||
    myOwnIfEdit(name === '1', theme.Colors.green[2], null) ||
    myOwnIfEdit(name === '2', theme.Colors.orange[3], null) ||
    myOwnIfEdit(name === '3', theme.Colors.blue[2], null) ||
    myOwnIfEdit(name === '4', theme.Colors.orange[4], null) ||
    myOwnIfEdit(name === '5', theme.Colors.green[5], null) ||
    myOwnIfEdit(name === '6', theme.Colors.purples[4], null) ||
    myOwnIfEdit(name === '7', theme.Colors.purples[5], null) ||
    myOwnIfEdit(name === '8', theme.Colors.grays[4], null) ||
    myOwnIfEdit(name === '9', theme.Colors.green[1], null)};
  border-radius: 3px;
  display: inline-block;
  & :hover {
    cursor: pointer;
  }
  ${({ checked }) =>
    !checked &&
    css`
      & svg {
        & polyline {
          display: none;
        }
      }
    `}
`;

export const StyledEditUserTagIcon = styled.svg<StyledEditUserTagColorCheckboxProps>`
  fill: none;
  height: 38px;
  stroke: ${({ theme }) => theme.Colors.grays[10]};
  stroke-width: 3px;
  width: 38px;
`;

// export const tagsColorsArrayEdit = [
//   { name: '0', color: '#3AA4FF' },
//   { name: '1', color: '#8BDFD0' },
//   { name: '2', color: '#F78F28' },
//   { name: '3', color: '#4D5ECA' },
//   { name: '4', color: '#FA5F5F' },
//   { name: '5', color: '#439152' },
//   { name: '6', color: '#C155F0' },
//   { name: '7', color: '#D03AC9' },
//   { name: '8', color: '#707070' },
//   { name: '9', color: '#24C3A7' },
// ];

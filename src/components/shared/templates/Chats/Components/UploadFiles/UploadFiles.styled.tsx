import styled from 'styled-components';

export const StyledUploadFiles = styled.div`
  width: 953px;
  min-height: 315px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-bottom-right-radius: 10px;
  box-shadow: 0px -2px 12px rgba(155, 154, 154, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: -25px;
  bottom: -78px;
  z-index: 1;
`;

export const StyledUploadFilesHeader = styled.div`
  padding: 0 32px;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    height: 13px;
    & > div {
      width: 13px;
      & * {
        & > svg {
          cursor: pointer;
          height: 13px;
          width: 13px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
`;

export const StyledUploadFilesBody = styled.div`
  min-height: 198px;
  padding: 0 20px 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  & > :first-child {
    min-height: 145px;
    width: 904px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
  }
  & > :last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    * {
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
`;

export const StyledDropHere = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ theme }) => theme.Colors.grays[7]};
  border-radius: 10px;
  * {
    color: ${({ theme }) => theme.Colors.grays[7]};
  }
`;

export const StyledDropHereIconAndText = styled.div`
  width: 185px;
  height: 113px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  & > div {
    width: 30px;
    height: 38px;
  }
`;

export const StyledFilesContainer = styled.div`
  width: 100%;
  width: 904px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  flex-direction: row-reverse;
`;

export const StyledOrderedListOfFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  /* max-width: 900px; */
`;

export const StyledSelectFile = styled.div`
  position: relative;
  left: 0px;
  width: 112px;
  min-width: 112px;
  height: 113px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 10px;
  border: 2px dashed ${({ theme }) => theme.Colors.purples[3]};
  margin-right: 16px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  &:hover {
    cursor: pointer;
    border: 2px dashed ${({ theme }) => theme.Colors.purples[1]};
    * {
      color: ${({ theme }) => theme.Colors.purples[1]};
      fill: ${({ theme }) => theme.Colors.purples[1]};
    }
  }
  & :active {
    * {
      color: ${({ theme }) => theme.Colors.purples[2]};
      fill: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
  * {
    color: ${({ theme }) => theme.Colors.purples[3]};
    fill: ${({ theme }) => theme.Colors.purples[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    text-align: center;
    line-height: 15px;
  }
  & > div {
    width: 27px;
    height: 34px;
  }
`;

export const StyledUploadedFile = styled.div`
  width: 112px;
  height: 113px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px 12px 10px 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  * {
    color: ${({ theme }) => theme.Colors.grays[5]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    text-align: center;
    line-height: 15px;
  }
  & div {
    width: 100%;
    height: 50%;
  }
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    text-align: center;
    * {
      fill: ${({ theme }) => theme.Colors.grays[7]};
    }
    & > :first-child {
      * {
        height: 17px;
        fill: ${({ theme }) => theme.Colors.green[3]};
      }
    }
    & > :nth-child(2) {
      align-self: center;
      height: 38px;
      width: 30px;
      margin-right: 11px;
      * {
        height: 38px;
        width: 30px;
      }
    }
    & button {
      width: 19px;
      height: 17px;
      margin-right: 11px;
      :hover {
        * {
          fill: ${({ theme }) => theme.Colors.grays[5]};
          cursor: pointer;
        }
      }
      * {
        width: 19px;
        height: 17px;
        fill: ${({ theme }) => theme.Colors.grays[7]};
      }
    }
  }
  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 45%;
    & > :first-child {
      overflow: hidden;
      max-height: 15px;
    }
  }
`;

export const StyledRejectedFile = styled(StyledUploadedFile)`
  border: 2px solid ${({ theme }) => theme.Colors.orange[4]};
  border-radius: 10px;
  & > :nth-child(1) {
    & > :first-child {
      * {
        fill: ${({ theme }) => theme.Colors.orange[4]};
      }
    }
  }
  & > span {
    & > :last-child {
      color: ${({ theme }) => theme.Colors.orange[4]};
    }
  }
`;

export const StyledUploadFilesFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  height: 72px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px;
  align-items: center;
`;

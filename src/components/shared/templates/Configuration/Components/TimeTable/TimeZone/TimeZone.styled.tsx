/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';

export const StyledTimeZone = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  max-height: 260px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 10px;
  & > button {
    width: 320px;
    height: 35px;
  }
`;
export const StyledTimeZoneHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 25px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  & > button {
    width: 15px;
    height: 15px;
    text-align: center;
    &: hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
  }
`;

export const StyledTimeZoneBody = styled.div`
  width: 340px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100%;
    padding: 0 10px;
    & :hover {
      cursor: pointer;
    }
    & * {
      min-height: 15px;
      font-size: 12px;
    }
  }
`;

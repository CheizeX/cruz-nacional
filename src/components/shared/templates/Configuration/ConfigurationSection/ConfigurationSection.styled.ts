import styled from 'styled-components';
import { ConfigSectionInterface } from './ConfigurationSection.interface';

export const StyledConfigurationSection = styled.section`
  border-radius: 10px;
  width: 1060px;
  height: 656px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const StyledRightSideTimeRestrictions = styled.div`
  border-radius: 10px;
  width: 406px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledParameters = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  height: 260px;
  border-radius: 10px;
`;

export const ToogleComponentForActivateRestriction = styled.button<ConfigSectionInterface>`
  width: 32px;
  height: 16px;
  border-radius: 27px;
  background-color: ${({ theme, activeRestrictionWhenCreate }) =>
    activeRestrictionWhenCreate
      ? 'rgba(30, 193, 67, 0.22)'
      : theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  padding: 0 4px;
  &: hover {
    cursor: pointer;
  }
  & > div {
    transition: all 0.3s ease-in-out;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.grays[7]};
    ${({ theme, activeRestrictionWhenCreate }) =>
      activeRestrictionWhenCreate &&
      `
    background-color: ${theme.Colors.green[4]};
    transform: translateX(10px);
  `}
  }
`;

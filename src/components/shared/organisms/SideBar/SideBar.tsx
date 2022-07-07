/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import {
  adminSection,
  supervisorSection,
  adminSectionRestricted,
  BackofficeSection,
  adminSectionEnterprise,
} from '../../../../config/backoffice';
import { useAppSelector } from '../../../../redux/hook/hooks';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import { BadgeMolecule } from '../../molecules/Badge/Badge';
import { CollapseSidebar } from '../BackofficeLayout/BackofficeLayout.interface';
import { StyledSideBarProps } from './SideBar.interface';
import {
  PlanStatus,
  PlanName,
} from '../../templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection.interface';
import {
  StyledSideBar,
  SideBarTopContainer,
  SideBarBodyContainer,
  StyledWrapperButton,
} from './SideBar.styled';
import { UserRole } from '../../../../models/users/role';

export const SideBarOrganism: FC<StyledSideBarProps & CollapseSidebar> = ({
  collapseArrow,
  setCollapseArrow,
  setSelectedSection,
}) => {
  const { planStatus, plan } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );
  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const sections =
    userDataInState && userDataInState.role === UserRole.SUPERVISOR
      ? supervisorSection
      : planStatus === PlanStatus.INACTIVE
      ? adminSectionRestricted
      : plan !== PlanName.ENTERPRISE
      ? adminSection
      : adminSectionEnterprise;

  const [focusedSection, setFocusedSection] = React.useState<string>(
    planStatus === PlanStatus.INACTIVE ? sections[1].name : sections[0].name,
  );

  const handleClick = (section: BackofficeSection) => {
    setSelectedSection(section.name);
    setFocusedSection(section.name);
  };

  return (
    <StyledSideBar collapseArrow={collapseArrow}>
      <SideBarTopContainer collapseArrow={collapseArrow}>
        <span>
          <div>
            <img src="/images/elipse-chat-blanco.png" alt="sidebar-1" />
          </div>
        </span>
        <button onClick={() => setCollapseArrow(!collapseArrow)}>
          {collapseArrow ? (
            <SVGIcon iconFile="/icons/collapse-right.svg" />
          ) : (
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          )}
        </button>
      </SideBarTopContainer>
      <SideBarBodyContainer collapseArrow={collapseArrow}>
        {sections.map((section, index) => (
          <StyledWrapperButton
            focused={section.name === focusedSection}
            key={index.toString()}
            onClick={() => handleClick(section)}>
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile={section.icon} />}
              rightIcon={
                planStatus === PlanStatus.WARNING &&
                section.name === 'Suscripciones'
                  ? () => <SVGIcon iconFile="/icons/small_watch.svg" />
                  : undefined
              }>
              <Text>{section.name}</Text>
            </BadgeMolecule>
          </StyledWrapperButton>
        ))}
      </SideBarBodyContainer>
    </StyledSideBar>
  );
};

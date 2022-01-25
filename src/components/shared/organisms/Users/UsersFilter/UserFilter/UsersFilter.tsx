import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Tabs } from '../../../Tabs/Tabs';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import {
  StyledWrapperFilterUser,
  StyledUserFilter,
  StyledUserHeader,
  StyledClose,
  StyledContainer,
  StyledTab,
  StyledFooter,
  SeletedRole,
  StyledButtonActive,
  StyledRadioRole,
} from './UserFilter.styled';
import { IPropsAsignamentTags, IUserFilterProps } from './UserFilter.interface';
import { UserRole } from '../../../../../../models/users/role';
import { TagsAsignament } from '../TagsAsignament/TagsAsignament';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';

export const UsersFilter: FC<IUserFilterProps & IPropsAsignamentTags> = ({
  checkedAsignationTags,
  filterRole,
  handleReset,
  handleToggleTags,
  setFilterRole,
  handleFilterData,
  setCheckedAsignationTags,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleFilterRole = (role: string) => {
    setFilterRole(role);
  };
  const handleToggle = () => {
    handleFilterData();
    setIsComponentVisible(false);
  };
  const onHandleReset = () => {
    setIsComponentVisible(false);
    handleReset();
    setCheckedAsignationTags([]);
  };

  return (
    <StyledWrapperFilterUser>
      <button type="button" onClick={() => setIsComponentVisible(true)}>
        <SVGIcon iconFile="/icons/filter.svg" />
      </button>
      {/* <Dropdown
        onClick={() => handleIsClose(false)}
        triggerElement={() => (
          <StyledOpen>
            <SVGIcon iconFile="/icons/filter.svg" />
          </StyledOpen>
        )}> */}
      {isComponentVisible && (
        <StyledUserFilter ref={ref}>
          <StyledUserHeader>
            <Text color="black">Filtrar usuario por:</Text>
            <StyledClose
              type="button"
              onClick={() => setIsComponentVisible(false)}>
              <SVGIcon iconFile="/icons/times.svg" />
            </StyledClose>
          </StyledUserHeader>
          <StyledContainer>
            <Tabs largeTabs>
              <div title="Rol">
                <SeletedRole
                  roles={filterRole}
                  active={filterRole === UserRole.SUPERVISOR}
                  onClick={() => handleFilterRole(UserRole.SUPERVISOR)}>
                  <StyledButtonActive
                    active={filterRole === UserRole.SUPERVISOR}>
                    <StyledRadioRole
                      active={filterRole === UserRole.SUPERVISOR}
                    />
                  </StyledButtonActive>
                  <SVGIcon iconFile="/icons/user_shelt.svg" />
                  <Text color="black">Supervisor</Text>
                </SeletedRole>
                <SeletedRole
                  roles={filterRole}
                  active={filterRole === UserRole.AGENT}
                  onClick={() => handleFilterRole(UserRole.AGENT)}>
                  <StyledButtonActive active={filterRole === UserRole.AGENT}>
                    <StyledRadioRole active={filterRole === UserRole.AGENT} />
                  </StyledButtonActive>
                  <SVGIcon iconFile="/icons/user.svg" />
                  <Text color="black">Agentes</Text>
                </SeletedRole>
                <SeletedRole
                  roles={filterRole}
                  active={filterRole === 'TODOS'}
                  onClick={() => handleFilterRole('TODOS')}>
                  <StyledButtonActive active={filterRole === 'TODOS'}>
                    <StyledRadioRole active={filterRole === 'TODOS'} />
                  </StyledButtonActive>
                  <SVGIcon iconFile="/icons/users.svg" />
                  <Text color="black">Todos</Text>
                </SeletedRole>
              </div>
              <StyledTab title="Etiquetas">
                <TagsAsignament
                  handleToggleTags={handleToggleTags}
                  checkedAsignationTags={checkedAsignationTags}
                />
              </StyledTab>
            </Tabs>
          </StyledContainer>
          <StyledFooter>
            <ButtonMolecule
              text="Limpiar"
              size={Size.MEDIUM}
              variant={ButtonVariant.OUTLINED}
              onClick={onHandleReset}
            />
            <ButtonMolecule
              text="Filtrar"
              onClick={handleToggle}
              size={Size.MEDIUM}
            />
          </StyledFooter>
        </StyledUserFilter>
      )}
      {/* </Dropdown> */}
    </StyledWrapperFilterUser>
  );
};

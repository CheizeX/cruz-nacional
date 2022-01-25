import { FC, useMemo, useState } from 'react';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import {
  StyledSearchByAsignation,
  StyledWrapperAsignation,
} from './SearchByAsignation.styled';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  IPropsSearchAsignation,
  ISearchByAsignation,
} from './SearchByAsignation.interface';
import useLocalStorage from '../../../../../../hooks/use-local-storage';

export const SearchByAsignation: FC<
  IPropsSearchAsignation & ISearchByAsignation
> = ({ filterByAsignation, filtersAsignation }) => {
  const [searchAgent, setSearchAgent] = useState('');
  const [accessToken] = useLocalStorage('AccessToken', '');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAgent(event.target.value);
  };
  const { datsAgents } = useAppSelector(
    (state) => state.reports.reportsAgentsQueryState,
  );

  const dateFilterAgent = useMemo(() => {
    if (!searchAgent) return datsAgents;
    return datsAgents.filter((agent) =>
      agent.name.toLowerCase().includes(searchAgent.toLowerCase()),
    );
  }, [datsAgents, searchAgent]);
  return (
    <StyledWrapperAsignation>
      <ContainerInput
        setFocus={() => null}
        onChange={onChange}
        placeHolder="Buscar agente..."
        LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
      />
      {dateFilterAgent?.map(({ _id, name, urlAvatar }) => (
        <StyledSearchByAsignation
          key={_id}
          checkedAgent={filtersAsignation.indexOf(_id) !== -1}>
          <Checkbox
            checked={filtersAsignation.indexOf(_id) !== -1}
            onClick={() => filterByAsignation(_id)}
          />
          {urlAvatar && urlAvatar !== '' ? (
            <img src={`${urlAvatar}?token=${accessToken}`} alt={name} />
          ) : (
            <SVGIcon iconFile="/icons/unknown_user.svg" />
          )}
          <Text>{name}</Text>
        </StyledSearchByAsignation>
      ))}
    </StyledWrapperAsignation>
  );
};

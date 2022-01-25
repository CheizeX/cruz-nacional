import { FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { RootState } from '../../../../../../redux';
import { ContainerChecked, ContainerTags } from './TagsAsignament.styled';
import { IAsignationProps } from './TagAsignament.interface';

export const TagsAsignament: FC<IAsignationProps> = ({
  handleToggleTags,
  checkedAsignationTags,
}) => {
  const { tagsData } = useSelector(
    (state: RootState) => state.tags.tagsQueryState,
  );

  const [searchChatAgent, setSearchChatAgent] = useState<string>('');

  const handleSearchInputChatAgent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchChatAgent(e.target.value);
  };
  const dataFilterTags = useMemo(() => {
    if (!searchChatAgent) return tagsData;
    return tagsData.filter((agent) =>
      agent.name.toLowerCase().includes(searchChatAgent.toLowerCase()),
    );
  }, [tagsData, searchChatAgent]);

  return (
    <>
      <ContainerInput
        setFocus={() => null}
        placeHolder="Buscar etiqueta..."
        LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
        onChange={handleSearchInputChatAgent}
      />
      <ContainerTags>
        {dataFilterTags?.map(({ name, color, _id }) => (
          <ContainerChecked key={_id} color={color}>
            <Checkbox
              isTransparent
              checked={checkedAsignationTags?.indexOf(name) !== -1}
              onClick={() => handleToggleTags(name)}
            />
            <span>{name}</span>
          </ContainerChecked>
        ))}
      </ContainerTags>
    </>
  );
};

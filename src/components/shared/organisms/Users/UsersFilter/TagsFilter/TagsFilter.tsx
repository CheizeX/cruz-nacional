import { FC, useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerTags, ContainerChecked } from './TagsFilter.styled';
import { RootState } from '../../../../../../redux';
import { setDataTag } from '../../../../../../redux/slices/tags/tag-management';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { readTags } from '../../../../../../api/tags';
import { FilterChannel } from '../../../../templates/Chats/Components/ChatsFilter/ChatFilter/ChatFilter.interface';

export const TagsFilter: FC<FilterChannel> = ({
  checkedTags,
  setCheckedTags,
}) => {
  const { tagsData } = useSelector(
    (state: RootState) => state.tags.tagsQueryState,
  );
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const getFilterTag = async () => {
    try {
      const response = await readTags();
      if (response.success === false) {
        dispatch(setDataTag([]));
      } else {
        dispatch(setDataTag(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  // queda pendiente si getData se pasa como dependencia

  useEffect(() => {
    getFilterTag();
  }, []);

  const [searchChatAgent, setSearchChatAgent] = useState<string>('');

  const handleSearchInputChatAgent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchChatAgent(e.target.value);
  };
  const dataFilterTags = useMemo(() => {
    if (!searchChatAgent) return tagsData;
    return tagsData.filter((agent: any) =>
      agent.name.toLowerCase().includes(searchChatAgent.toLowerCase()),
    );
  }, [tagsData, searchChatAgent]);

  const handleTagsFilter = (name: any) => {
    const currentIndex = checkedTags?.indexOf(name);
    const newChecked = [...checkedTags];
    if (currentIndex === -1) {
      newChecked.push(name);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedTags(newChecked);
  };

  return (
    <>
      <ContainerInput
        setFocus={() => null}
        placeHolder="Buscar etiqueta..."
        LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
        onChange={handleSearchInputChatAgent}
      />
      <ContainerTags>
        {dataFilterTags?.map(({ name, color, _id }: any) => (
          <ContainerChecked key={_id} color={color}>
            <Checkbox
              isTransparent
              checked={checkedTags?.indexOf(name) !== -1}
              onClick={() => handleTagsFilter(name)}
            />
            <span>{name}</span>
          </ContainerChecked>
        ))}
      </ContainerTags>
    </>
  );
};

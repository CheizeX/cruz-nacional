import { FC, useState } from 'react';
import useDisplayElementOrNot from '../../../../../../../hooks/use-display-element-or-not';
import { useAppDispatch } from '../../../../../../../redux/hook/hooks';
import {
  setChannelsToFilter,
  setTagsToFilter,
} from '../../../../../../../redux/slices/live-chat/options-to-filter';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../../atoms/Button/Button';
import { Checkbox } from '../../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { Tabs } from '../../../../../organisms/Tabs/Tabs';
import { TagsFilter } from '../../../../../organisms/Users/UsersFilter/TagsFilter/TagsFilter';
import { FilterChannelsProps, FilterChannel } from './ChatFilter.interface';
import { chatFilterChannels } from './ChatFilter.shared';
import {
  StyledChatFilterWrapper,
  StyledChatFilterHeader,
  StyledChatFilter,
  StyledChatFilterBody,
  StyledFilterTags,
  StyledChatFilterFooter,
  StyledWrapperChecked,
} from './ChatFilter.styled';

export const ChatFilter: FC<FilterChannelsProps & FilterChannel> = () => {
  const dispatch = useAppDispatch();

  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [checkedTags, setCheckedTags] = useState<any[]>([]);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleFilterChannels = (name: string) => {
    const currentIndex = selectedChannels?.indexOf(name);
    const newChecked = [...selectedChannels];
    if (currentIndex === -1) {
      newChecked.push(name);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedChannels(newChecked);
  };

  const handleCleanTagsAndChannels = () => {
    setCheckedTags([]);
    setSelectedChannels([]);
    dispatch(setTagsToFilter([]));
    dispatch(setChannelsToFilter([]));
    setIsComponentVisible(false);
  };

  const handleFilterTagsAndChannels = () => {
    if (checkedTags && checkedTags.length > 0) {
      dispatch(setTagsToFilter(checkedTags));
      setIsComponentVisible(false);
    } else {
      dispatch(setTagsToFilter([]));
      setIsComponentVisible(false);
    }
    if (selectedChannels && selectedChannels.length > 0) {
      dispatch(setChannelsToFilter(selectedChannels));
      setIsComponentVisible(false);
    } else {
      dispatch(setChannelsToFilter([]));
      setIsComponentVisible(false);
    }
  };

  return (
    <StyledChatFilterWrapper>
      <button type="button" onClick={() => setIsComponentVisible(true)}>
        <SVGIcon iconFile="/icons/filter.svg" />
      </button>
      {isComponentVisible && (
        <StyledChatFilter ref={ref}>
          <StyledChatFilterHeader>
            <Text>Filtrar por:</Text>
            <button type="button" onClick={() => setIsComponentVisible(false)}>
              <SVGIcon iconFile="/icons/times.svg" />
            </button>
          </StyledChatFilterHeader>
          <StyledChatFilterBody>
            <Tabs largeTabs>
              <StyledFilterTags title="Etiquetas">
                <TagsFilter
                  checkedTags={checkedTags}
                  setCheckedTags={setCheckedTags}
                />{' '}
              </StyledFilterTags>
              <div title="Canal">
                {chatFilterChannels?.map(({ id, name, icon }) => (
                  <StyledWrapperChecked
                    checked={selectedChannels?.indexOf(name) !== -1}
                    key={id}>
                    <Checkbox
                      checked={selectedChannels?.indexOf(name) !== -1}
                      onClick={() => handleFilterChannels(name)}
                    />
                    <SVGIcon iconFile={`/icons/${icon}.svg`} />
                    <Text color="black">{name}</Text>
                  </StyledWrapperChecked>
                ))}
              </div>
            </Tabs>
          </StyledChatFilterBody>
          <StyledChatFilterFooter>
            <ButtonMolecule
              text="Limpiar"
              size={Size.MEDIUM}
              variant={ButtonVariant.OUTLINED}
              onClick={() => handleCleanTagsAndChannels()}
            />
            <ButtonMolecule
              text="Filtrar"
              size={Size.MEDIUM}
              onClick={() => handleFilterTagsAndChannels()}
            />
          </StyledChatFilterFooter>
        </StyledChatFilter>
      )}
    </StyledChatFilterWrapper>
  );
};

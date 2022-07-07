import { FC, useState } from 'react';
import { FaFileCsv } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledRightPanel,
  StyledHeaderRightPanel,
  StyledCount,
  ContainerDropdown,
  InputSearch,
} from './RightPanelReports.styled';
import { NoChatSearch } from '../NoChatSearch/NoChatSearch';
import { SearchForChats } from '../SearchForChats/SearchForChats';
import { IPropsRightReport } from './RightReports.interface';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

export const RightPanelReports: FC<IPropsRightReport> = ({
  handleDownload,
  onChangeReports,
  setIsModalConversationInReports,
  setClientIdInReports,
  handleToggle,
  handleSearch,
  setAllData,
  setSkip,
  datsReports,
  isSearch,
  isHasMore,
  total,
}) => {
  // const { datsReports } = useAppSelector(
  //   (state) => state.reports.reportsQueryState,
  // );
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleToggleSearch = () => {
    setSkip(0);
    handleSearch();
  };

  const handleResetSearch = () => {
    setAllData([]);
    handleToggle();
  };
  return (
    <StyledRightPanel>
      <StyledHeaderRightPanel>
        <div>
          <Text>Resultados de búsqueda</Text>
          <StyledCount isColor={datsReports.length !== 0}>{total}</StyledCount>
        </div>
        <div>
          <InputSearch focusInput={isFocus}>
            <input
              onChange={onChangeReports}
              placeholder="Buscar por agente o cliente..."
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              value={isSearch}
            />
            <div>
              {isSearch !== '' && (
                <button type="button" onClick={handleResetSearch}>
                  <SVGIcon iconFile="/icons/times.svg" />
                </button>
              )}
              <button type="button" onClick={handleToggleSearch}>
                <SVGIcon iconFile="/icons/search-solid.svg" />
              </button>
            </div>
          </InputSearch>
          {/* <SVGIcon iconFile="/icons/print.svg" /> */}
          <button
            disabled={!datsReports || datsReports.length === 0}
            type="button"
            onClick={handleClick}>
            {isComponentVisible ? (
              <SVGIcon color="gray" iconFile="/icons/download_arc.svg" />
            ) : (
              <SVGIcon iconFile="/icons/download_arc.svg" />
            )}
          </button>
          {isComponentVisible ? (
            <div ref={ref}>
              <ContainerDropdown>
                <button type="button" onClick={() => handleDownload('csv')}>
                  <BadgeMolecule
                    bgColor="transparent"
                    leftIcon={() => <FaFileCsv />}>
                    <Text>CSV</Text>
                  </BadgeMolecule>
                </button>
                <button type="button" onClick={() => handleDownload('xlsx')}>
                  <BadgeMolecule
                    bgColor="transparent"
                    leftIcon={() => <SiMicrosoftexcel />}>
                    <Text>EXCEL</Text>
                  </BadgeMolecule>
                </button>
              </ContainerDropdown>
            </div>
          ) : null}
        </div>
      </StyledHeaderRightPanel>
      {datsReports.length > 0 ? (
        <SearchForChats
          datsReports={datsReports}
          isHasMore={isHasMore}
          setSkip={setSkip}
          setClientIdInReports={setClientIdInReports}
          setIsModalConversationInReports={setIsModalConversationInReports}
        />
      ) : (
        <NoChatSearch />
      )}
    </StyledRightPanel>
  );
};

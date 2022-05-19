import { FC } from 'react';
import { FaFileCsv } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledRightPanel,
  StyledHeaderRightPanel,
  StyledCount,
  ContainerDropdown,
} from './RightPanelReports.styled';
import { NoChatSearch } from '../NoChatSearch/NoChatSearch';
import { SearchForChats } from '../SearchForChats/SearchForChats';
import { IPropsRightReport } from './RightReports.interface';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

export const RightPanelReports: FC<IPropsRightReport> = ({
  handleDownload,
  onChangeReports,
  datsReports,
}) => {
  // const { datsReports } = useAppSelector(
  //   (state) => state.reports.reportsQueryState,
  // );
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <StyledRightPanel>
      <StyledHeaderRightPanel>
        <div>
          <Text>Resultados de búsqueda</Text>
          <StyledCount isColor={datsReports.length !== 0}>
            {datsReports.length}
          </StyledCount>
        </div>
        <div>
          <ContainerInput
            placeHolder="Buscar por agente o cliente..."
            setFocus={() => null}
            onChange={onChangeReports}
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
          />
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
        <SearchForChats datsReports={datsReports} />
      ) : (
        <NoChatSearch />
      )}
    </StyledRightPanel>
  );
};

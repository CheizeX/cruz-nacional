import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledRightPanel,
  StyledHeaderRightPanel,
  StyledCount,
} from './RightPanelReports.styled';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { NoChatSearch } from '../NoChatSearch/NoChatSearch';
import { SearchForChats } from '../SearchForChats/SearchForChats';
import { IPropsRightReport } from './RightReports.interface';

export const RightPanelReports: FC<IPropsRightReport> = ({
  handleDownload,
}) => {
  const { datsReports } = useAppSelector(
    (state) => state.reports.reportsQueryState,
  );

  return (
    <StyledRightPanel>
      <StyledHeaderRightPanel>
        <Text>Resultados de búsqueda</Text>
        <div>
          <Text>Total registros </Text>
          <StyledCount isColor={datsReports.length !== 0}>
            {datsReports.length}
          </StyledCount>
          {/* <SVGIcon iconFile="/icons/print.svg" /> */}
          <button
            disabled={!datsReports || datsReports.length === 0}
            type="button"
            onClick={handleDownload}>
            <SVGIcon iconFile="/icons/download_arc.svg" />
          </button>
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

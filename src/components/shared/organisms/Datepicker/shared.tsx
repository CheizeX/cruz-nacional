import styled from 'styled-components';

export const DatepickerContainer = styled.div<{ activeMonthsCount: number }>`
  position: relative;
  background: white;
  display: grid;
  grid-template-columns: repeat(
    ${({ activeMonthsCount }) => activeMonthsCount},
    224px
  );
  grid-gap: 0 32px;
  padding: 8px;
  width: max-content;
`;

export const DatepickerButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`;

export const DatepickerButton = styled.button`
  height: 8px;
  width: 8px;
  pointer-events: all;
  cursor: pointer;
`;

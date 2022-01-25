import {
  FC,
  MouseEventHandler,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

const DropdownContent = styled.div<Props>`
  pointer-events: all;
`;
export interface Props {
  onClose?: () => void;
}
export interface DropdownProps {
  onClick?: MouseEventHandler;
  triggerElement: () => JSX.Element;
}

export const Dropdown: FC<DropdownProps> = ({
  triggerElement,
  onClick = () => {},
  children,
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const dropdownContentRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setVisibility] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  const onReferenceClick = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      setVisibility((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );

  const outsideClickHandler = useCallback<EventListener>(
    (e) => {
      const isPopper = e
        .composedPath()
        .some(
          (target) =>
            (target as HTMLElement).className ===
            dropdownContentRef?.current?.className,
        );
      e.preventDefault();
      if (!isPopper && isVisible) setVisibility(false);
    },
    [isVisible],
  );

  useEffect(() => {
    document.addEventListener('click', outsideClickHandler);

    return () => document.removeEventListener('click', outsideClickHandler);
  }, [isVisible, outsideClickHandler]);

  return (
    <>
      <button
        type="button"
        ref={setReferenceElement}
        onClick={onReferenceClick}>
        {triggerElement()}
      </button>
      <div
        ref={setPopperElement}
        style={{
          ...styles.popper,
          pointerEvents: 'none',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        {...attributes.popper}>
        <DropdownContent ref={dropdownContentRef}>{children}</DropdownContent>
      </div>
    </>
  );
};

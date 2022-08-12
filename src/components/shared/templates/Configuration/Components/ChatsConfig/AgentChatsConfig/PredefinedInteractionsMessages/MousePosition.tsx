import { useState, useEffect } from 'react';
import { IPropsCoordinats } from './PredefinedInteractionsMessages.interface';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<IPropsCoordinats>({
    x: null,
    y: null,
  });

  const updateMousePosition = (ev: {
    clientX: number | null;
    clientY: number | null;
  }) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;

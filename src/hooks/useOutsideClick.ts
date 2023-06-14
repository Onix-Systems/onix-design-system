import { useRef, useEffect } from 'react';

const useOutsideClick = (callback: () => void, disabled: boolean = false) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement) && !disabled) {
        callback();
      }
    };
    document.addEventListener('mousedown', (e) => handleClick(e), true);
    return () => {
      document.removeEventListener('mousedown', (e) => handleClick(e), true);
    };
  }, [ref, disabled, callback]);

  return ref;
};

export default useOutsideClick;

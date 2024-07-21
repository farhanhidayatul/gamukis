import { useEffect, useState, useCallback } from 'react';

const useKeyPress = (keyMappings) => {
  const [keySafe, setKeySafe] = useState(true);

  const keydownFunction = useCallback((event) => {
    if (keySafe && keyMappings[event.code]) {
      setKeySafe(false);
      keyMappings[event.code]();
    }
  }, [keySafe, keyMappings]);

  const keyupFunction = useCallback((event) => {
    if (keyMappings[event.code]) {
      setKeySafe(true);
    }
  }, [keyMappings]);

  useEffect(() => {
    document.addEventListener('keydown', keydownFunction);
    document.addEventListener('keyup', keyupFunction);

    return () => {
      document.removeEventListener('keydown', keydownFunction);
      document.removeEventListener('keyup', keyupFunction);
    };
  }, [keydownFunction, keyupFunction]);

  return null;
};

export default useKeyPress;

import {  useState, useCallback } from "react";

const useOpenExpendable = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  return { isOpen, toggle };
};

export default useOpenExpendable;

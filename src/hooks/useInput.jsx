import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const reset = () => {
    setValue("");
  };

  const setFocused = () => setIsFocused(true);

  return [value, handleChange, reset, isValid, isFocused, setFocused];
};

export { useInput };

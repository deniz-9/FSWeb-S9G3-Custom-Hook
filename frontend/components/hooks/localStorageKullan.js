
import { useState } from "react";
import { useEffect } from "react";

function localStorageKullan(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    let stringifiedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, stringifiedValue);
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
export default localStorageKullan;

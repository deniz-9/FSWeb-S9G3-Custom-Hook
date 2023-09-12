
import { useState } from 'react';

function localStorageKullan(key, initialValue) {
  // Local storage'dan veri çekme veya varsayılan değeri kullanma
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State tanımlama 
  const [value, setValue] = useState(initial);

  // Veriyi local storage'a kaydetmek için bir fonksiyon.
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default localStorageKullan;

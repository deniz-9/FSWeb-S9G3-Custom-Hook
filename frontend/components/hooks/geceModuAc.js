
import { useEffect } from 'react';

function geceModuAc() {
  // local storage'dan gece modunu kontrol etme
  const isDarkModeSaved = localStorage.getItem('isDarkMode') === 'true';

  // State'i tanımlama ve başlangıç değerini local storage'dan alma
  const [isDarkMode, setIsDarkMode] = useState(isDarkModeSaved);

  // Gece modu durumunu local storage'a kaydeden yardımcı bir fonksiyon.
  const saveDarkModeToLocalStorage = (value) => {
    localStorage.setItem('isDarkMode', value);
  };

  //Gece modu değişikliği algılandığında local storage'a kaydetme
  useEffect(() => {
    saveDarkModeToLocalStorage(isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}

export default geceModuAc;


import localStorageKullan from "./localStorageKullan";

function geceModuAc() {
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);
  return [geceModu, setGeceModu];
}
export default geceModuAc;

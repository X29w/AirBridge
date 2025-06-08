import { useEffect, useState } from "react";

const useLocalIp = () => {
  const [ip, setIp] = useState<string>("");

  const getLocalIp = async () => {
    const ip = await window.electronAPI["local-ip"]();
    setIp(ip);
  };

  useEffect(() => {
    getLocalIp();
  }, []);

  return ip;
};

export default useLocalIp;

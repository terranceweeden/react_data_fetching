import { useEffect, useRef } from "react";

const useRenderTimes = () => {
  const renderRef = useRef(0);

  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  }, []);
  return renderRef.current;
};

export default useRenderTimes;

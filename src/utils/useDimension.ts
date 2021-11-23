import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const initialState = { width: 0, height: 0 };
//  ref is the reference to the element whose height and with is required
//  const divRef = useRef(null);
//  const { height, width } = useDimension(divRef);
//  <div ref={divRef}>
const useDimension = (ref : any) => {
  const [dimensions, setdDimensions] = useState(initialState);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    (resizeObserverRef.current as any) = new ResizeObserver((entries: any = []) => {
      entries.forEach((entry : any) => {
        const { width, height } = entry.contentRect;
        setdDimensions({ width, height });
      });
    });
    if (ref.current) (resizeObserverRef.current as any).observe(ref.current);
    return () => {
      if (resizeObserverRef.current) (resizeObserverRef.current as any).disconnect();
    };
  }, [ref]);
  return dimensions;
};

export default useDimension;
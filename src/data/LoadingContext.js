import React, { useState, useEffect, useRef, createContext } from "react";
import { getMatchInfo } from "../calls/fixtures";
// import { getMatchInfoWithAxios } from "../calls/fixtures";

const LoadingContext = createContext();

function LoadingProvider(props) {
  const [loading, setLoading] = useState(true);

  const componentIsMounted = useRef(true);

  useEffect(() => {
    getMatchInfo()
      .then(response => {
        if (componentIsMounted.current) {
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  return (
    <>
      <LoadingContext.Provider value={[loading, setLoading]}>
        {props.children}
      </LoadingContext.Provider>
    </>
  );
}

export default LoadingProvider;
export { LoadingContext };

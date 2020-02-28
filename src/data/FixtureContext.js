import React, { useState, useEffect, useRef, createContext } from "react";
import { getMatchInfo } from "../calls/fixtures";

const FixtureContext = createContext();

function FixtureProvider(props) {
  const [fixture, setFixture] = useState([]);

  const componentIsMounted = useRef(true);

  useEffect(() => {
    getMatchInfo()
      .then(response => {
        if (componentIsMounted.current) {
          setFixture(response);
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
      <FixtureContext.Provider value={[fixture, setFixture]}>
        {props.children}
      </FixtureContext.Provider>
    </>
  );
}

export default FixtureProvider;
export { FixtureContext };

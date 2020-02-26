import React, { useState, useEffect, useRef, createContext } from "react";
import { getMatchInfo } from "../calls/fixtures";
// import { getMatchInfoWithAxios } from "../calls/fixtures";

const FixtureContext = createContext();
const today = new Date();

function FixtureProvider(props) {
  const [fixture, setFixture] = useState([]);

  const componentIsMounted = useRef(true);

  useEffect(() => {
    getMatchInfo()
      .then(response => {
        if (componentIsMounted.current) {
          setFixture(
            response.filter(item =>
              item.matches.some(
                match => Number(match.dateTime.slice(8, 10)) === today.getDate()
              )
            )
          );
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

import { load } from "cheerio";
import jsonframe from "jsonframe-cheerio";
// import axios from "axios";

// async function getMatchInfoWithAxios() {
//   try {
//     const res = await axios.get("http://localhost:5000/jokes/random");
//     const { data } = res;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getMatchInfo() {
  try {
    const response = await fetch(
      "http://localhost:8080/https://www.goal.com/tr/canl%C4%B1-skorlar"
    );

    const text = await response.text();

    const $ = load(text);

    jsonframe($);

    const frame = {
      fixture: {
        _s: ".competition-matches",
        _d: [
          {
            leagueName: ".competition-title",
            matches: {
              _s: ".match-row",
              _d: [
                {
                  dateTime: "time @ datetime",
                  hour: ".match-status time",
                  databind: ".match-status span",
                  homeTeam: {
                    name: ".team-home .team-name",
                    score: ".team-home .goals",
                    logo: ".team-home .crest img @ src"
                  },
                  awayTeam: {
                    name: ".team-away .team-name",
                    score: ".team-away .goals",
                    logo: ".team-away .crest img @ src"
                  },
                  additionalInfo: ".match-additional-data__agregate"
                }
              ]
            }
          }
        ]
      }
    };

    const fixtureList = $(".widget-fixtures-and-results").scrape(frame);
    const { fixture } = fixtureList;
    return fixture;
  } catch (error) {
    console.log(error);
  }
}

export { getMatchInfo };
// export { getMatchInfoWithAxios };

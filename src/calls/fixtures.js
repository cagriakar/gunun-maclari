import { load } from "cheerio";
import jsonframe from "jsonframe-cheerio";

const today = new Date();

async function getMatchInfo() {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.goal.com/tr/canl%C4%B1-skorlar"
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
    const filteredFixture = await fixture.filter(
      item => item.matches.length > 0
    );
    const finalFixture = await filteredFixture.filter(item =>
      item.matches.some(
        match =>
          match.dateTime !== undefined &&
          Number(match.dateTime.slice(8, 10)) === today.getDate()
      )
    );
    return finalFixture;
  } catch (error) {
    console.log(error);
  }
}

export { getMatchInfo };

const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

const cors_proxy = require("cors-anywhere");
// const request = require("request");
// const cheerio = require("cheerio");
// const jsonframe = require("jsonframe-cheerio");

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const portie = process.env.PORT || 8080;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all originss
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(portie, host, function() {
    console.log("Running CORS Anywhere on " + host + ":" + portie);
  });

const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// // app.get("/jokes/random", (req, res) => {
//   request(
//     { url: "https://www.goal.com/tr/canl%C4%B1-skorlar" },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: "error", message: error.message });
//       }
//       console.log(body);
//       const $ = cheerio.load(body);

//       jsonframe($);

//       let frame = {
//         fixture: {
//           _s: ".competition-matches",
//           _d: [
//             {
//               leagueName: ".competition-title",
//               matches: {
//                 _s: ".match-row",
//                 _d: [
//                   {
//                     dateTime: ".match-row__date",
//                     hour: ".match-row__date",
//                     homeTeam: {
//                       name: ".match-row__team-home .match-row__team-name",
//                       score: ".match-row__teams td:first-child",
//                       logo:
//                         ".match-row .match-main-data .match-main-data-link .match-teams .match-data .team-home .crest img @ src"
//                     },
//                     awayTeam: {
//                       name: ".match-row__team-away .match-row__team-name",
//                       score: ".match-row__teams td:last-child",
//                       logo:
//                         ".match-row .match-main-data .match-main-data-link .match-teams .match-data .team-away .crest img @ src"
//                     },
//                     additionalInfo:
//                       ".match-additional-data .match-additional-data__agregate"
//                   }
//                 ]
//               }
//             }
//           ]
//         }
//       };

//       let fixtureList = $(".widget-fixtures-and-results").scrape(frame);

//       let { fixture } = fixtureList;
//       res.send(fixture);
//     }
//   );
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

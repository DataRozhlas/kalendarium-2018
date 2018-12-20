import "./targetblank"; // pro otvírání odkazů v novém okně
import $ from "jquery";
import data from "./data";

function getDateOfWeek(w) {
  const d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
  const monDate = new Date(2018, 0, d);
  const sunDate = new Date(2018, 0, d + 6);
  return [monDate.getMonth() + 1, monDate.getDate(), sunDate.getMonth() + 1, sunDate.getDate()];
}

Object.entries(data).forEach((week) => {
  const weekdiv = $("<div></div>")
    .addClass("weekdiv")
    .attr("id", week[0]);

  // wiki záznam
  const wikilink = `http://cs.wikipedia.org/wiki/${week[1].wiki.title.replace(" ", "_")}`;

  const wikititle = $("<h3></h3>")
    .addClass("wikititle")
    .html(`<a href="${wikilink}" target="_blank">${week[1].wiki.title}</a>`);

  const wikitext = $("<div></div>")
    .addClass("wikitext")
    .text(week[1].wiki.text);

  const wikidiv = $("<div></div>")
    .addClass("wikidiv")
    .attr("id", `wiki${week[0]}`);

  $(wikidiv).append(wikititle, wikitext);

  // irozhlas záznam
  // google záznam
  const irtitle = $("<h3></h3>")
    .addClass("irtitle")
    .html(`<a href="${week[1].ir.link}" target="_blank">${week[1].ir.title}</a>`);

  const irtext = $("<div></div>")
    .addClass("irtext")
    .text(week[1].ir.text);

  const irdiv = $("<div></div>")
    .addClass("irdiv")
    .attr("id", `ir${week[0]}`);

  $(irdiv).append(irtitle, irtext);

  // google záznam
  const googletitle = $("<h3></h3>")
    .addClass("googletitle")
    .text(week[1].google.title);

  const googleterm = $("<div></div>")
    .addClass("googleterm")
    .html(`Nejhledanějším termínem bylo <i>${week[1].google.term}</i>.`);

  const googlediv = $("<div></div>")
    .addClass("googlediv")
    .attr("id", `google${week[0]}`);

  $(googlediv).append(googletitle, googleterm);

  // kompletace
  $(weekdiv).append(wikidiv, irdiv, googlediv);

  const weekNumber = week[0].replace("week", "");
  const dates = getDateOfWeek(weekNumber);
  let dateText;
  if (dates[0] === dates[2]) {
    dateText = `${dates[1]}. - ${dates[3]}. ${dates[0]}.`;
  } else {
    dateText = `${dates[1]}. ${dates[0]}. - ${dates[3]}. ${dates[2]}.`;
  }

  const weektitle = $("<h2></h2>")
    .addClass("weektitle")
    .text(`${weekNumber}. týden (${dateText})`);


  $("#kalendarium").append(weektitle, weekdiv);
});
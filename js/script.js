import "./targetblank"; // pro otvírání odkazů v novém okně
import $ from "jquery";
import data from "./data";

function getDateOfWeek(w) {
  const d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
  const monDate = new Date(2018, 0, d);
  const sunDate = new Date(2018, 0, d + 6);
  return [monDate.getMonth() + 1, monDate.getDate(), sunDate.getMonth() + 1, sunDate.getDate()];
}

function getMonthName(m) {
  switch (m) {
    case 1:
      return "ledna";
    case 2:
      return "února";
    case 3:
      return "března";
    case 4:
      return "dubna";
    case 5:
      return "května";
    case 6:
      return "června";
    case 7:
      return "července";
    case 8:
      return "srpna";
    case 9:
      return "září";
    case 10:
      return "října";
    case 11:
      return "listopadu";
    case 12:
      return "prosince";
    default:
      return m;
  }
}

Object.entries(data).forEach((week) => {
  const weekdiv = $("<div></div>")
    .addClass("weekdiv")
    .attr("id", week[0]);

  // wiki záznam
  const wikidiv = $("<div></div>")
    .addClass("wikidiv")
    .attr("id", `wiki${week[0]}`);

  if (week[1].wiki) {
    const wikilink = `http://cs.wikipedia.org/wiki/${week[1].wiki.title.replace(" ", "_")}`;

    const wikititle = $("<h3></h3>")
      .addClass("wikititle")
      .html(`<a href="${wikilink}" target="_blank">${week[1].wiki.title}</a>`);

    const wikitext = $("<div></div>")
      .addClass("wikitext")
      .text(week[1].wiki.text);

    $(wikidiv).append(wikititle, wikitext);
  }

  // irozhlas záznam
  const irtitle = $("<h3></h3>")
    .addClass("irtitle")
    .html(`<a href="${week[1].ir.url}" target="_blank">${week[1].ir.title}</a>`);

  const irimglink = $("<a></a>")
    .attr("href", week[1].ir.url);

  const irimg = $("<img></img>")
    .addClass("irimg")
    .attr("src", week[1].ir.img);

  $(irimglink).append(irimg);

  const irdiv = $("<div></div>")
    .addClass("irdiv")
    .attr("id", `ir${week[0]}`);

  $(irdiv).append(irtitle, irimglink);

  // google záznam
  const googlediv = $("<div></div>")
    .addClass("googlediv")
    .attr("id", `google${week[0]}`);

  if (week[1].google) {
    const googletitle = $("<h3></h3>")
      .addClass("googletitle")
      .text(week[1].google.title);

    const googleterm = $("<div></div>")
      .addClass("googleterm")
      .html(`Nejhledanějším termínem bylo <i>${week[1].google.term}</i>.`);

    $(googlediv).append(googletitle, googleterm);
  }

  // kompletace
  $(weekdiv).append(wikidiv, irdiv, googlediv);

  const weekNumber = week[0].replace("week", "");
  const dates = getDateOfWeek(weekNumber);

  let dateText;
  if (dates[0] === dates[2]) {
    dateText = `${dates[1]}. - ${dates[3]}. ${getMonthName(dates[0])}`;
  } else {
    dateText = `${dates[1]}. ${getMonthName(dates[0])} - ${dates[3]}. ${getMonthName(dates[2])}`;
  }

  const weektitle = $("<h2></h2>")
    .addClass("weektitle")
    .text(`${weekNumber}. týden (${dateText})`);


  $("#kalendarium").append(weektitle, weekdiv);
});

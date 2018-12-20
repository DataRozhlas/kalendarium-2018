import "./targetblank"; // pro otvírání odkazů v novém okně
import $ from "jquery";
import data from "./data";

Object.entries(data).forEach((week) => {
  const weekdiv = $("<div></div>")
    .addClass("weekdiv")
    .attr("id", week[0]);

  // wiki záznam
  const wikilink = `http://cs.wikipedia.org/wiki/${week[1].wiki.title.replace(" ", "_")}`;

  const wikititle = $("<h2></h2>")
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
  const irtitle = $("<h2></h2>")
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
  const googletitle = $("<h2></h2>")
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
  $("#kalendarium").append(weekdiv);
});

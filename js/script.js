import "./targetblank"; // pro otvírání odkazů v novém okně
import { h, render } from "preact";
/** @jsx h */
import data from "./data";
import { getDateText } from "./datehelper";

const Title = ({ link, classname, text }) => (
  <h3 className={classname}>
    {(link === "")
      ? text
      : <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>}
  </h3>
);

const Img = ({ classname, link, src }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img className={classname} src={src} alt="" />
  </a>
);

const Text = ({ text, classname }) => (
  <div className={classname}>
    {text}
  </div>
);

const WikiDiv = ({ week }) => (
  <div className="wikidiv" id={`wiki${week[0]}`}>
    <Title
      link={`http://cs.wikipedia.org/wiki/${week[1].wiki.title.replace(" ", "_")}`}
      classname="wikititle"
      text={week[1].wiki.title}
    />
    <Text
      classname="wikitext"
      text={week[1].wiki.text}
    />
  </div>
);

const IrDiv = ({ week }) => (
  <div className="irdiv" id={`ir${week[0]}`}>
    <Title
      link={week[1].ir.url}
      classname="irtitle"
      text={week[1].ir.title}
    />
    <Img
      link={week[1].ir.url}
      classname="irimg"
      src={week[1].ir.img}
    />
  </div>
);

const GoogleDiv = ({ week }) => (
  <div className="googlediv" id={`google${week[0]}`}>
    <Title
      link=""
      classname="googletitle"
      text={week[1].google.title}
    />
    <Text
      classname="googleterm"
      text={["Nejhledanějším termínem bylo ", <i>{week[1].google.term}</i>, "."]}
    />
  </div>
);

const WeekTitle = ({ week }) => {
  const weekNumber = week[0].replace("week", "");
  return (
    <h2 className="weektitle">
      {`${weekNumber}. týden (${getDateText(weekNumber)})`}
    </h2>
  );
};

const WeekDiv = ({ week }) => (
  <div className="weekdiv" id={week[0]}>
    <WikiDiv week={week} />
    <IrDiv week={week} />
    <GoogleDiv week={week} />
  </div>
);

const Calendar = () => (
  <div>
    {Object.entries(data).map(week => (
      <div>
        <WeekTitle week={week} />
        <WeekDiv week={week} />
      </div>
    ))}
  </div>
);

// ========================================

render(<Calendar />, document.getElementById("kalendarium"));

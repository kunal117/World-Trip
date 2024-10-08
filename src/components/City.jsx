/* eslint-disable */

import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { useCities } from "../hooks/useCities";
import { useEffect } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

// const flagemojiToPNG = (flag) => {
//   var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
//     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
//     .join("");
//   return (
//     <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
//   );
// };

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  //   // TEMP DATA
  const { id } = useParams();
  const { getCity, currentCity, isLoading, flagemojiToPNG } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Spinner />;
  // const { cityName, emoji, date, notes } = currentCity;
  // Provide default values while destructuring
  const {
    cityName = "Unknown City",
    emoji = "",
    date = "",
    notes = "No notes available",
  } = currentCity;

  return (
    // <h1>Hello</h1>
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{flagemojiToPNG(emoji)}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;

import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((accumulator, city) => {
    if (!accumulator.some((item) => item.country === city.country)) {
      accumulator.push({
        country: city.country,
        emoji: city.emoji,
      });
    }
    return accumulator;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
};

export default CountryList;

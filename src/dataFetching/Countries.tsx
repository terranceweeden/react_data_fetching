// Create a simple React application that displays a list of contries  and their capitals
// The application should have the following features:
//
// The list of countries and capitals should be fetched from API
//The list should be displayed in the CountriesPage.
// Each country should be displayed in a separate component
// The user should be able to filter the list by Capital

import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Select from "../ui/Select";

/**
 * To fecch all countries, use the `/all` endpoint
 */

const BASE_URL = "https://restcountries.com/v3.1";

/**
 * To filter by capital city, use the '/capital/${capital}' endpoint
 */

const FILTERABLE_CAPITALS = [
  "Tallin",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
  name: {
    common: string;
  };
  capital: string;
  flag: string;
}

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <ul key={country.name.common}>
      Country: {country.name.common}
      <br />
      Capital: {country.capital}
      {country.flag}
    </ul>
  );
};

const CountriesPage = () => {
  const [countries, SetCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [capital, setCapital] = useState<Capital>();

  const abortControllerRef = useRef<AbortController | null>(null);
  //This is an artificially slows down rendering
  //   let now = performance.now();
  //   while (performance.now() - now < 1000) {
  //     //Do nothing for a bit...
  //   }

  useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      const url = capital
        ? `${BASE_URL}/capital/${capital}`
        : `${BASE_URL}/all`;
      try {
        const response = await fetch(url, {
          signal: abortControllerRef.current?.signal,
        });
        const countries = await response.json();
        SetCountries(countries);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [capital]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Something went wrong, try again!!</h1>;
  }

  //   console.log(countries);

  return (
    <div className="p-4">
      React Interview
      <div>
        <Select>
          {FILTERABLE_CAPITALS.map((capital) => {
            return (
              <Select.Option key="capital" value={capital}>
                {capital}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div>
        {countries.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </div>
  );
};

export default CountriesPage;

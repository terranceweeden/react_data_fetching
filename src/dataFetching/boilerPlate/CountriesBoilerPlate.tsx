// Create a simple React application that displays a list of contries  and their capitals
// The application should have the following features:
//
// The list of countries and capitals should be fetched from API
//The list should be displayed in the CountriesPage.
// Each country should be displayed in a separate component
// The user should be able to filter the list by Capital

import React from "react";
import { useEffect, useState } from "react";
// import Select from "@/components/ui/Select";

/**
 * To fecch all countries, use the `/all` endpoint
 */

const BASE_URL = "https://restcountries.com/v3.1";

/**
 * To filter by capital city, use the '/capital/${capital}' endpoint
 */

const FILTERABLE_CAPITALS = [
  "Tallinn",
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
}

const CountriesPage = () => {
  return <div className="p-4">React Interview</div>;
};

export default CountriesPage;

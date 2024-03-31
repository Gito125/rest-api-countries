import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./styles/App.css";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import SingleCountry from "./components/SingleCountry/SingleCountry";
import { Routes, Route } from "react-router-dom";
import CountriesData from "./Data/Data";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [countries, setCountries] = useState(CountriesData);
  const [region, setRegion] = useState(localStorage.getItem('region') || "Asia");

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    }
  };

  const handleCountriesFilter = (value) => {
    const regionCountries = CountriesData.filter((country) =>
      country.region.includes(region)
    );
    const filteredCountries = regionCountries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setCountries(filteredCountries);
    localStorage.setItem("filteredCountry", value);
  };

  const handleSelection = (value) => {
    setRegion(value);
    localStorage.setItem('region', value)
    localStorage.setItem("filteredCountry", "");
  };
  useEffect(() => {
    const regionCountries = CountriesData.filter((country) =>
      country.region.includes(region)
    );
    setCountries(regionCountries);
  }, [region]);

  window.onload = () => {
    document.body.style.transition = "all .05s ease";
    if (theme === "dark") {
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else if (theme === "light") {
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    }
  };

  return (
    <div className="font-body">
      {/* HEADER */}
      <Header theme={theme} handleThemeChange={handleThemeChange} />

      <Routes>
        {/* NAVIGATION AND MAIN*/}
        <Route
          path="/"
          element={
            <>
              <Navigation
                theme={theme}
                handleSelection={handleSelection}
                handleFilter={handleCountriesFilter}
              />
              <Main theme={theme} CountriesData={countries} />
            </>
          }
        />

        {/* SINGLE COUNTRY */}
        <Route path="/:id" element={<SingleCountry theme={theme} />} />

        {/* 404 */}
        <Route
          path="/not-found"
          element={
            <div className="container my-20 w-9/12 mx-auto flex justify-between items-center">
              <h1 className=" text-6xl text-red-500">Country Not Found... </h1>
              <h1 className=" text-6xl text-red-500 animate-bounce ease-in">
                😭
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

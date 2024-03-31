import React, { useState } from "react";

const Navigation = ({ theme, handleFilter, handleSelection }) => {
  const filteredCountry = localStorage.getItem("filteredCountry") || "";
  const [selectedReigion, setSelectedRegion] = useState(localStorage.getItem('region') || 'Asia')
  const regions = ['Asia', 'Africa', 'America', 'Europe', 'Polar', 'Americas']

  return (
    <nav>
      <header className="w-full">
        <div className="container lg:w-10/12 m-auto py-4 sm:py-6 px-2 sm:px-2">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <input
              value={filteredCountry}
              onChange={(e) => {
                e.preventDefault();
                handleFilter(e.target.value);
              }}
              type="text"
              className={
                theme === "dark"
                  ? "px-3 py-3 placeholder:ml-7 w-full rounded-sm outline-none bg-p_c sm:w-72 md:w-80 hover:shadow-md"
                  : "px-3 py-3 placeholder:ml-7 w-full rounded-sm outline-none bg-s_a sm:w-72 md:w-80 hover:shadow-md"
              }
              placeholder="🔎  Search for a country..."
            />

            <select
              onChange={(e) => {
                handleSelection(e.target.value)
                setSelectedRegion(e.target.value)
              }}
              value={selectedReigion}
              className={
                theme === "dark"
                  ? "p-3 w-full rounded-sm bg-p_c sm:w-72 md:w-80 mt-3 sm:mt-0 text-white outline-none hover:shadow-md"
                  : "p-3 w-full rounded-sm bg-s_a sm:w-72 md:w-80 mt-3 sm:mt-0 text-s_b outline-none hover:shadow-md"
              }
            >
              {
                regions.sort().map(region => (
                  <option value={region} disabled={region === selectedReigion}>{region}</option>
                ))
              }
            </select>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navigation;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CountriesData from "../../Data/Data";
import Skeleton from "@mui/material/Skeleton";

const SingleCountry = ({ theme, data }) => {
  const [isLoading, setIsloading] = useState(true);
  setTimeout(() => {
    setIsloading(false);
  }, 1000);
  const { id } = useParams();
  const navigate = useNavigate();

  const CountryData = CountriesData.filter((data) => data.name === id);
  const Data = CountryData[0];
  useEffect(() => {
    if (Data === null || Data === undefined) {
      console.log(Data);
      navigate("/not-found");
    }
  });

  const getCountryName = (code) =>
    CountriesData.filter((data) => data.alpha3Code === code)[0].name;

  return (
    Data && (
      <div className="w-full">
        <div className="container lg:w-10/12 m-auto py-4 sm:py-6 px-2 sm:px-2">
          <button
            onClick={() => navigate("/")}
            type="button"
            className={
              theme === "dark"
                ? "my-8 text-white py-3 px-5 shadow-lg rounded-sm bg-p_c hover:opacity-90 w-28"
                : "my-8 text-s_b py-3 px-5 shadow-lg rounded-sm bg-s_a hover:opacity-90 w-28"
            }
          >
            Back
          </button>

          <div className="CountryContainer grid grid-cols-1 md:grid-cols-2 md:gap-20 text-s_b">
            <div className="mb-5">
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"100%"}
                  height={"400px"}
                />
              ) : (
                <img src={Data.flags.svg} alt={Data.name} loading="lazy" />
              )}
            </div>
            <div className="CountryDetails flex flex-col justify-between w-full sm:w-96">
              {isLoading ? (
                <div className="mb-3">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={180}
                    height={30}
                  />
                </div>
              ) : (
                <h2
                  className={
                    theme === "dark"
                      ? "CountryName text-white text-3xl font-bold my-2 sm:mt-0"
                      : "CountryName text-p_b text-3xl font-bold my-2 sm:mt-0"
                  }
                >
                  {Data.name}
                </h2>
              )}
              <div
                className={
                  theme === "dark"
                    ? "CountryData text-white flex flex-col sm:flex-row justify-between items-start  my-3 sm:my-0"
                    : "CountryData text-p_b flex flex-col sm:flex-row justify-between items-start  my-3 sm:my-0"
                }
              >
                {isLoading ? (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={250}
                  />
                ) : (
                  <>
                    <div className="text-sm">
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Native Name:</p>
                        <p className="ml-2">{Data.nativeName}</p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Population:</p>
                        <p className="ml-2">
                          {Data.population.toLocaleString("en-US")}
                        </p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Region:</p>
                        <p className="ml-2">{Data.region}</p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Sub Region:</p>
                        <p className="ml-2">{Data.subregion}</p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Capital:</p>
                        <p className="ml-2">{Data.capital}</p>
                      </div>
                    </div>

                    <div className="mt-4 text-sm">
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Top Level Domain:</p>
                        <p className="ml-2">{Data.topLevelDomain}</p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Currencies:</p>
                        <p className="ml-2">
                          {Data.currencies === undefined
                            ? "No Currency"
                            : Data.currencies[0].name}
                        </p>
                      </div>
                      <div className="flex mt-2 mr-1 justify-start items-center">
                        <p className="mr-1 font-semibold">Languages:</p>
                        <p className="ml-2">
                          {Data.languages.map((lang) => lang.name).join(", ")}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="BorderCountries mt-10 w-full flex justify-between">
                {isLoading ? (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={40}
                  />
                ) : (
                  <>
                    <h3
                      className={
                        theme === "dark"
                          ? "text-sm 2 text-white"
                          : "text-sm 2 text-p_b"
                      }
                    >
                      Border Countrues:{" "}
                    </h3>
                    <div className=" flex items-center flex-wrap">
                      {Data.borders
                        ? Data.borders.map((code) => (
                            <Link to={`/${getCountryName(code)}`} key={code}>
                              <button
                                type="button"
                                className={
                                  theme === "dark"
                                    ? "text-white text-xs p-1 sm:my-0 shadow-lg rounded-sm bg-p_c hover:opacity-90 w-fit mr-1 sm:mr-1 mt-1 sm:mt-1"
                                    : "text-p_b text-xs p-1 sm:my-0 shadow-lg rounded-sm bg-s_a hover:opacity-90 w-fit mr-1 sm:mr-1 mt-1 sm:mt-1"
                                }
                              >
                                {getCountryName(code)}
                              </button>
                            </Link>
                          ))
                        : null}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleCountry;

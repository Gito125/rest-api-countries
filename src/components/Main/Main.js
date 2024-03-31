import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Main = ({ theme, CountriesData }) => {
  const [isLoading, setIsloading] = useState(true);
  setTimeout(() => {
    setIsloading(false);
  }, 1000);
  return (
    <>
      <main className="w-full">
        <div className="container lg:w-10/12 m-auto py-4 sm:py-6 px-2 sm:px-2">
          <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {!isLoading
              ? CountriesData.map((data, i) => (
                  <Link to={`/${data.name}`} key={i}>
                    <div className="Card">
                      <div className="CardHeader">
                        <img
                          src={data.flags.svg}
                          className="w-full"
                          alt={data.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="CardBody">
                        <h3
                          className={
                            theme === "dark"
                              ? "text-lg mt-2 font-bold text-white"
                              : "text-lg mt-2 font-bold text-p_b"
                          }
                        >
                          {data.name}
                        </h3>

                        <div
                          className={
                            theme === "dark" ? "text-white" : "text-p_b"
                          }
                        >
                          <div className="flex mt-2 justify-start items-center">
                            <p className="mr-1 font-semibold text-sm">
                              Population :
                            </p>
                            <p className="ml-2 text-sm">
                              {data.population.toLocaleString("en-US")}
                            </p>
                          </div>
                          <div className="flex mt-2 justify-start items-center">
                            <p className="mr-1 font-semibold text-sm">
                              Region :
                            </p>
                            <p className="ml-2 text-sm">{data.region}</p>
                          </div>
                          <div className="flex mt-2 justify-start items-center">
                            <p className="mr-1 font-semibold text-sm">
                              Capital :
                            </p>
                            <p className="ml-2 text-sm">{data.capital}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className="MySkeleton">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={"100%"}
                      height={230}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={110}
                      height={35}
                    />
                    <div className="flex">
                      <Skeleton
                        animation="wave"
                        sx={{ marginRight: "12px" }}
                        variant="text"
                        width={150}
                      />
                      <Skeleton animation="wave" variant="text" width={100} />
                    </div>
                    <div className="flex">
                      <Skeleton
                        animation="wave"
                        sx={{ marginRight: "12px" }}
                        variant="text"
                        width={100}
                      />
                      <Skeleton animation="wave" variant="text" width={100} />
                    </div>
                    <div className="flex">
                      <Skeleton
                        animation="wave"
                        sx={{ marginRight: "12px" }}
                        variant="text"
                        width={100}
                      />
                      <Skeleton animation="wave" variant="text" width={100} />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

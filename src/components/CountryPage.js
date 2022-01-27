import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Countrypage = ({ countries, loading }) => {
  let { countryName } = useParams();
  let navigate = useNavigate();
  let country = countries.find((item) => {
    return item.alpha3Code === countryName;
  });
  return (
    <div className="mt-4  px-12 py-8">
      {!loading ? (
        <>
          <button
            onClick={() => navigate("/")}
            className="flex items-center py-2 px-6 hover:!bg-opacity-80 bg-white text-gray-800 shadow-gray-300 dark:shadow-sm rounded-md dark:bg-darkelem dark:text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <div className="mt-10 space-y-10 md:space-y-0 gap-6 md:grid grid-cols-2 items-center">
            <div className="flex items-center justify-center">
              <img
                className="w-[26rem] shadow-xl object-contain"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className="dark:text-white text-gray-900">
              <h1 className="font-bold  text-2xl">{country.name}</h1>
              <div className="flex flex-col sm:flex-row font-medium mt-4 space-y-8 sm:space-y-0 sm:space-x-16">
                <div>
                  <p>
                    nativeName :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.nativeName}
                    </span>
                  </p>
                  <p>
                    Population :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.population.toLocaleString("en")}
                    </span>
                  </p>
                  <p>
                    Region :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.region}
                    </span>
                  </p>
                  <p>
                    Sub Region :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.subregion}
                    </span>
                  </p>
                  <p>
                    Capital :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.capital || "No Capital"}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    Top Level Domain :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.topLevelDomain && country.topLevelDomain[0]}
                    </span>
                  </p>
                  <p>
                    Currencies :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.currencies && country.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    Languages :{" "}
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.languages && country.languages.map((lang) => lang.name).join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center flex-wrap">
                <p className="font-medium w-full lg:w-auto mr-2 mb-3">
                  Border Countries:{" "}
                </p>
                {country["borders"] && country.borders.map((border) => {
                  let bCountry = countries.find((count) => {
                    return count.alpha3Code === border;
                  });
                  if (!bCountry) return <span key={-1}></span>;
                  return (
                    <p
                      onClick={() =>
                        navigate(`/${bCountry.alpha3Code}`)
                      }
                      className="dark:bg-darkelem hover:opacity-80 font-light cursor-pointer mr-4 mb-2 bg-white rounded-md px-3 py-1"
                      key={bCountry.alpha3Code}
                    >
                      {bCountry.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Countrypage;

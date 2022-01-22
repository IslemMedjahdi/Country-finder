import React from "react";
import Country from "./Country";
import Skeleton from "./Skeleton";
const Countrieslist = ({ countries, page, loading, error, tryAgain }) => {
  return (
    <>
      {!loading ? (
        <>
          {!error ? (
            countries.slice(page * 12, page * 12 + 12).map((country) => {
              return (
                <Country
                  key={country.name}
                  flag={country.flag}
                  name={country.name || ""}
                  population={country.population.toLocaleString("en")}
                  region={country.region}
                  capital={country.capital || "No capital"}
                  alpha3Code={country.alpha3Code}
                />
              );
            })
          ) : (
            <div className="text-2xl mt-7 font-medium space-y-5 text-gray-900 dark:text-white">
              <p>Error. Try again</p>
              <button onClick={tryAgain} className="dark:bg-darkelem shadow-md bg-white text-base px-3 py-2 rounded-md">Refresh</button>
            </div>
          )}
        </>
      ) : (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => (
            <Skeleton key={skeleton} />
          ))}
        </>
      )}
    </>
  );
};

export default Countrieslist;

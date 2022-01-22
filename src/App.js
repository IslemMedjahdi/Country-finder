import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Countrypage from "./components/CountryPage";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      let response = await fetch("https://restcountries.com/v2/all");
      let countries = await response.json();
      countries = countries.filter((elem) => elem.name !== "Israel");
      setCountries(countries);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") === "false" ? false : true);
    } else {
      localStorage.setItem("theme", false);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);
  return (
    <div className={`App  ${theme ? "dark" : ""}`}>
      <div className="dark:bg-darkbg min-h-screen scroll-smooth transition duration-300 bg-lightbg">
        <Router>
          <Header
            theme={theme}
            toggleTheme={() => setTheme((theme) => !theme)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  countries={countries}
                  loading={loading}
                  theme={theme}
                  setTheme={setTheme}
                  tryAgain={fetchData}
                />
              }
            />
            <Route
              path="/:countryName"
              element={<Countrypage loading={loading} countries={countries} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

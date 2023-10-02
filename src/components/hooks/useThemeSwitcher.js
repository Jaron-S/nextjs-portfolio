import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [theme, setTheme] = useState("");

  const handleChange = () => {
    const userPref = window.localStorage.getItem("theme");

    let theme;

    if (userPref) {
      theme = userPref === "dark" ? "dark" : "light";
    } else {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      theme = mediaQuery.matches ? "dark" : "light";
    }

    setTheme(theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Listen to changes
    const mediaQuery = window.matchMedia(preferDarkQuery);
    mediaQuery.addEventListener("change", handleChange);

    // Initial load
    handleChange();

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme);

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;

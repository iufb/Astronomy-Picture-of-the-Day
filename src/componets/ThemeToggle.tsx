import { useEffect, useState } from "react";
import { Button } from "../ui";

const themes:string[] = ["light", "dark"];

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage != "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? <div className="flex px-2  bg-baseColor text-gray dark:bg-white gap-2 py-1">{themes.map((t:string)=>{
    const checked = t === theme
    return <button onClick={toggleTheme} key={t} className={`${checked ? 'bg-gray text-baseColor' : 'dark:text-gray'}  px-2`} >{t === 'light' ? 'light' : 'dark'}</button>
  })}</div> : <div />;
};

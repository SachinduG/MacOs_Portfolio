import { useState, useEffect } from "react";
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import useWindowStore from "../store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "default") return "dark";
      if (prev === "dark") return "light";
      return "default";
    });
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Sachindu's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (

            <li key={id} onClick={() => id === 4 && toggleTheme()}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>
            {dayjs().format("DD MMM YYYY hh:mm A")}
        </time>
      </div>
    </nav>
  );
};
export default Navbar;

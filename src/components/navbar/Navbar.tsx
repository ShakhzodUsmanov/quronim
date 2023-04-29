import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {ClockCircleFilled } from "@ant-design/icons";
import "./navComponent.sass";
import { Link } from "react-router-dom";

export const NavComponent = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="navComponent">
      <select
        className="navComponent__dropDown"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="uz">Uzbek</option>
      </select>
      <Link to='/time' className="navComponent__iconWrapper">
        <ClockCircleFilled />
      </Link>
    </div>
  );
};

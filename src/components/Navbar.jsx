import { useContext, useState } from "react";
import { backIcon, resetIcon, searchIcon } from "../utils/images";
import { TodoContext } from "../context/TodoContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { search, setSearch } = useContext(TodoContext);
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const back = () => {
    setSearch("");
    setShow(true);
  };
  const clearSearch = () => setSearch("");

  const changeLang = () => {
    const currentLang = language == "ru" ? "en" : "ru";
    i18n.changeLanguage(currentLang);
    setLanguage(currentLang);
  };
  return (
    <header className="header">
      <div className="header__nav">
        {show ? (
          <>
            <button className="header__nav-lang" onClick={() => changeLang()}>
              {language}
            </button>
            <h1 className="header__nav-title">{t("title")}</h1>
            <button
              className="header__nav-search"
              onClick={() => setShow(false)}
            >
              <img src={searchIcon} alt="" />
            </button>
          </>
        ) : (
          <>
            <button className="header__nav-back" onClick={() => back()}>
              <img src={backIcon} alt="" />
            </button>
            <input
              type="text"
              placeholder={t("search") + "..."}
              className="header__nav-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="header__nav-clear" onClick={() => clearSearch()}>
              <img src={resetIcon} alt="" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;

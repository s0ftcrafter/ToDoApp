import clsx from "clsx";
import { gridIcon, listIcon } from "../utils/images";
import { useContext, useState } from "react";
import NotesItem from "./NotesItem";
import { TodoContext } from "../context/TodoContext";
import { useTranslation } from "react-i18next";

const Notes = ({ notes }) => {
  const { t } = useTranslation();
  const [view, setView] = useState(true);
  const viewIcon = view ? listIcon : gridIcon;
  const viewSpan = view ? t("list") : t("grid");
  const notesList = clsx("notes__list", { active: !view });
  const { search } = useContext(TodoContext);
  return (
    <div className="notes">
      <div className="notes__top">
        <h3 className="notes__top-title">
          {notes.length && search.length
            ? t("search")
            : notes.length
            ? t("allNotes")
            : t("noNotes")}
        </h3>
        <button className="notes__top-btn" onClick={() => setView(!view)}>
          <img src={viewIcon} alt="" />
          <span className="notes__top-btn_span">{viewSpan}</span>
        </button>
      </div>
      <div className={notesList}>
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} view={view} />
        ))}
      </div>
    </div>
  );
};

export default Notes;

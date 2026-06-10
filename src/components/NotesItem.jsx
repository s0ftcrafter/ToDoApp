import { useContext } from "react";
import { editIcon, removeIcon } from "../utils/images";
import { TodoContext } from "../context/TodoContext";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const NotesItem = ({ note, view }) => {
  const notesListTop = clsx("notes__list-item_top", { active: !view });
  const { changeNoteHandler, deleteHandler } = useContext(TodoContext);
  const { t } = useTranslation();

  return (
    <div className="notes__list-item">
      <div className={notesListTop}>
        <h4 className="notes__list-item_top-title">{note.title}</h4>
        <p className="notes__list-item_top-date">{note.date}</p>
      </div>
      <p className="notes__list-item_desc">{note.desc}</p>
      <div className="notes__list-item_bottom">
        <button
          className="notes__list-item_bottom-btn purple"
          onClick={() => changeNoteHandler(note)}
        >
          <img src={editIcon} alt="" />
          <span>{t("edit")}</span>
        </button>
        <button
          className="notes__list-item_bottom-btn red"
          onClick={() => deleteHandler(note.id)}
        >
          <img src={removeIcon} alt="" />
          <span>{t("remove")}</span>
        </button>
      </div>
    </div>
  );
};

export default NotesItem;

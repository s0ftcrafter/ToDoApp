import { useContext, useState } from "react";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { useTranslation } from "react-i18next";

const Modal = ({ isEdit, editNote }) => {
  const { closeModalHandler, addOrChangeHandler } = useContext(TodoContext);
  const { t } = useTranslation();

  const [title, setTitle] = useState(editNote?.title ?? "");
  const [desc, setDesc] = useState(editNote?.desc ?? "");
  const addOrChange = () => {
    if (title.length > 2 && desc.length > 2) {
      const item = {
        id: editNote?.id ?? v4(),
        title,
        desc,
        date: new Date().toLocaleDateString(),
      };
      addOrChangeHandler(item);
      closeModalHandler();
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="modal" onClick={() => closeModalHandler()}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__block-title">
          {isEdit
            ? t("change") + " " + t("notes")
            : t("add") + " " + t("notes")}
        </h3>
        <div className="modal__block-form">
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type="text"
              placeholder="Content"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-bottom">
          <button
            className="modal__block-bottom-btn red"
            onClick={() => closeModalHandler()}
          >
            {t("cancel")}
          </button>
          <button
            className="modal__block-bottom-btn purple"
            onClick={() => addOrChange()}
          >
            {isEdit ? t("change") : t("add")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

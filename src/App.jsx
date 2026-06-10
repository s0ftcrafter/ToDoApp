import { useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { editIcon } from "./utils/images";
import Modal from "./components/Modal";
import { TodoContext } from "./context/TodoContext";
const App = () => {
  // <></>ReactFragment

  const [notes, setNotes] = useState([
    {
      id: 123,
      title: "Космическая мечта",
      desc: "Научиться играть на укулеле под звёздным небом. Бонус-уровень: готовить какао на костре и не сжечь маршмелло.",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 145,
      title: "Гениальный план",
      desc: "Создать ИИ, который отвечает на письма от бабушки. Тон: тёплый, с emoji и рецептами борща.",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 15,
      title: "Личный челлендж",
      desc: "30 дней без фразы «начну с понедельника». Понедельник уже здесь — дерзай и побеждай!",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [search, setSearch] = useState("");

  const deleteHandler = (id) => {
    const deleteNotes = notes.filter((item) => item.id != id);
    setNotes(deleteNotes);
  };

  const addOrChangeHandler = (note) => {
    if (editNote?.id) {
      const updNotes = notes.map((item) => {
        if (item.id == note.id) return note;
        else return item;
      });
      setNotes(updNotes);
    } else {
      setNotes([...notes, note]);
    }
  };
  const openModalHandler = () => {
    setIsModaleOpen(true);
    setIsEdit(false);
    setEditNote(null);
  };
  const closeModalHandler = () => {
    setIsModaleOpen(false);
    setIsEdit(false);
    setEditNote(null);
  };
  const changeNoteHandler = (note) => {
    setIsModaleOpen(true);
    setIsEdit(true);
    setEditNote(note);
  };

  const searchNotes = notes.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TodoContext.Provider
        value={{
          closeModalHandler,
          addOrChangeHandler,
          changeNoteHandler,
          deleteHandler,
          search,
          setSearch,
        }}
      >
        <Navbar />
        <div className="container">
          <Notes notes={searchNotes} />
        </div>
        <button className="addBtn" onClick={() => openModalHandler()}>
          <img src={editIcon} alt="" />
        </button>
        {isModaleOpen && <Modal isEdit={isEdit} editNote={editNote} />}
      </TodoContext.Provider>
    </>
  );
};

export default App;

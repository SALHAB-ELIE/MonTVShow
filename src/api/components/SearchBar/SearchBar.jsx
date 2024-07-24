import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log(" onSubmit : " + e.target.value.trim());
      onSubmit(e.target.value.trim());
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show you may like"
        className={s.input}
      />
    </div>
  );
}

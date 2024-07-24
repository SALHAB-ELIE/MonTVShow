import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>You may also like :</div>
      <div className={s.list}>
        {tvShowList.map((item) => {
          return (
            <span key={item.id} className={s.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={item} />
            </span>
          );
        })}
      </div>
    </>
  );
}

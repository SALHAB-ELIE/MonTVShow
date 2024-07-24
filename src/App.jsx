import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./api/components/TVShowDetails/TvShowDetails";
import { Logo } from "./api/components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./api/components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./api/components/TVShowList/TVShowList";
import { SearchBar } from "./api/components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulers() {
    const populers = await TVShowAPI.fetchPopulers();
    if (populers && populers.length > 0) {
      setCurrentTVShow(populers[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations && recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10)); // On récupère que les 10 premiers éléments
    }
  }

  useEffect(() => {
    fetchPopulers();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function setTvShowFromRecommodation(tvShow) {
    alert(JSON.stringify(tvShow));
  }

  console.log("recommendationList : " + JSON.stringify(recommendationList));

  async function searchTVShow(tvShowName) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponse && searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={(tvShow) => {
              setCurrentTVShow(tvShow);
            }}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

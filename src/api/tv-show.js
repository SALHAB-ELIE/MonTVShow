import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulers() {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      console.log("fetchPopulers : " + error);
      return null;
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      console.log("fetchRecommendations : " + error);
      return null;
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
    } catch (error) {
      console.log("fetchByTitle : " + error);
      return null;
    }
  }
}

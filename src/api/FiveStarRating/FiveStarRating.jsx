import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Tableau avec le nombre d'étoile
  const starList = [];
  // Nombre d'étoile pleine
  const starFillCount = Math.floor(rating);
  // Nombre d'étoile à moitié vide
  const hasStarHalf = rating - starFillCount >= 0.5;
  // Nombre d'étoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  // On rempli notre tableau
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}

/* eslint-disable react/prop-types */
import style from "../css/card.module.css";

export function Card({ name, gender, house, image }) {
  /* const { name, gender, house, image } = props; */
  return (
    <div className={style.card}>
      <div className={style.img_cont}>
        <img src={image} alt={name} />
      </div>
      <div>
        <p>Nombre: {name} </p>
        <p>Casa: {house} </p>
        <p>Género: {gender} </p>
      </div>
    </div>
  );
}

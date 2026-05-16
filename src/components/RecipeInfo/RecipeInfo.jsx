import { FaBell } from "react-icons/fa";
import { FaCookieBite } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import PropTypes from "prop-types";


export default function RecipeInfo({ recipe }) {
  // console.log(props);
  const { image, name, time, calories, difficulty, servings} = recipe;

  return (
    <div>
      <img src={image} alt={name} width="300" />
      <h2>{name}</h2>
      <p>
        <FaBell color={"blue"} /> Time: {time}
      </p>
      <p>
        <FaCookieBite color={"yellow"} /> Calories: {calories}
      </p>
      <p>
        <FaAward color={"red"} size={17} /> Difficulty: {difficulty}
      </p>
      <p>
        <IoPeople color={"green"} /> Servings: {servings}
      </p>
    </div>
  );
}

RecipeInfo.PropTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  calories: PropTypes.number,
  difficulty: PropTypes.number,
  servings: PropTypes.number
};

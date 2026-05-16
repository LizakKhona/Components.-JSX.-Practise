import RecipeInfo from "../RecipeInfo/RecipeInfo";
import PropTypes from "prop-types";

const RecipeList = ({ recipes }) => (
  // console.log(props.recipes)
  // const { recipes } = props.recipes
  <ul>
    {recipes.map((recipe, index) => (
        
        <li key={index}>
            <RecipeInfo recipe={recipe}/>
        </li>
    ))}
  </ul>
);

export default RecipeList

RecipeList.PropTypes = {
    recipes: PropTypes.arrayOf(PropTypes.exact({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        calories: PropTypes.number,
        difficulty: PropTypes.number,
        servings: PropTypes.number
    }))
}
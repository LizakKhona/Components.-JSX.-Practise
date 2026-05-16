import './App.css'
import RecipeList from "./components/RecipeList/RecipeList"
import recipes from "./recipes.json"

function App() {
  return (
    <>
      <RecipeList recipes={recipes}/>
    </>
  )
}

export default App

import { Link } from 'react-router-dom'
import { useAppContext } from '../contexts/App.Context'
import type { Meal, MealSummary } from '../types/recipe'

export function RecipeCard({ meal }: { meal: Meal | MealSummary }) {
    const { isFavorite } = useAppContext()
    const favorite = isFavorite(meal.idMeal)
    return (
        <div className={`card${favorite ? ' favorite' : ''}`}>
            <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
            <div className="card-content">
                <h3>{meal.strMeal}</h3>
                {meal.strCategory && <p>Category: {meal.strCategory}</p>}
                <Link to={`/recipe/${meal.idMeal}`} className="btn">View Full Recipe</Link>
            </div>
        </div>
    )
}

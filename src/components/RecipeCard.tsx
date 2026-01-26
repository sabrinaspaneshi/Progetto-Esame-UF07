import { Link } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'

export function RecipeCard({ meal }) {
    const { isFavorite } = useAppContext()
    const favorite = isFavorite(meal.idMeal)
    return (
        <div className={`card${favorite ? ' favorite' : ''}`}>
            <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
            <div className="card-content">
                <h3>{meal.strMeal}</h3>
                {meal.strCategory && <p>Category: {meal.strCategory}</p>}
            </div>
        </div>
    )
}

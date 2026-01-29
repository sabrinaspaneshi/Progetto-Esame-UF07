import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMeal } from '../hooks/useRecipes2';
import { useAppContext } from '../contexts/App.Context';
import type { Meal } from '../types/recipe';


export default function RecipeDetail() {
    const { id } = useParams<{ id: string }>();
    const { data: meal, isLoading, error } = useMeal(id);
    const { addToFavorites, removeFromFavorites, isFavorite } = useAppContext();
    const [favoriteMessage, setFavoriteMessage] = useState('');

    const handleToggleFavorite = () => {
        if (meal) {
            if (isFavorite(meal.idMeal)) {
                removeFromFavorites(meal.idMeal);
                setFavoriteMessage('removed');
                setTimeout(() => setFavoriteMessage(''), 3000);
            } else {
                addToFavorites(meal.idMeal);
                setFavoriteMessage('success');
                setTimeout(() => setFavoriteMessage(''), 3000);
            }
        }
    };

    if (isLoading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;
    if (!meal) return <p className="error">Recipe not found</p>;

    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}` as keyof Meal] as string;
        const measure = meal[`strMeasure${i}` as keyof Meal] as string;
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`.trim());
        }
    }
    return (
        <div>
            <main className="container recipe-detail">
                <div className="detail-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, margin: '18px 0 24px 0' }}>
                    <Link to="/" className="btn">Back to Home</Link>
                    <button
                        className={`btn${isFavorite(meal.idMeal) ? ' favorite' : ''}`}
                        onClick={handleToggleFavorite}
                    >
                        {isFavorite(meal.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
                <h1>{meal.strMeal}</h1>
                {favoriteMessage === 'success' && <span className="success">Added to favorites!</span>}
                {favoriteMessage === 'removed' && <span className="removed">Removed from favorites.</span>}
                <div className="detail-flex">
                    <div className="detail-img">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <div className="info">
                            <p><strong>Category:</strong> {meal.strCategory}</p>
                            <p><strong>Area:</strong> {meal.strArea}</p>
                            {meal.strTags && <p><strong>Tags:</strong> {meal.strTags}</p>}
                            {meal.strYoutube && (
                                <p><a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>
                            )}
                        </div>
                    </div>
                    <div className="detail-ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h2>Instructions</h2>
                <p>{meal.strInstructions}</p>
            </main>
        </div>
    );
}

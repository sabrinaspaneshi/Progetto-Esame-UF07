import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


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


}
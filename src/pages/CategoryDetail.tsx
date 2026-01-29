import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { RecipeCard } from '../components/RecipeCard'
import { useMealsByCategory } from '../hooks/useRecipes2'


export default function CategoryDetail() {
    const { category } = useParams<{ category: string }>()
    const { data: meals, isLoading, error } = useMealsByCategory(category || '')
    if (isLoading) return <p className="loading">Loading recipes...</p>
    if (error) return <p className="error">Error: {error.message}</p>
    return (
        <div>
            <Header title="Recipes from Around the World" />
            <main className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '18px 0 24px 0' }}>
                    <Link to="/categories" className="btn">Back to Categories</Link>
                    <h1 style={{ margin: 0, flex: 1, textAlign: 'center' }}>Recipes for category: {category}</h1>
                </div>
                <div style={{ marginTop: '32px' }}>
                    {meals && meals.length > 0 ? (
                        <div className="grid">
                            {meals.map(meal => (
                                <RecipeCard key={meal.idMeal} meal={meal} />
                            ))}
                        </div>
                    ) : (
                        <p className="error">No recipes found for this category.</p>
                    )}
                </div>
            </main>
        </div>
    )
}
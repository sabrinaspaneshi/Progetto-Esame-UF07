import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'

export default function CategoryDetail() {
    const { category } = useParams()
    const { data: meals, isLoading, error } = useMealsByCategory(category)

    if (isLoading || error) {
        return (
            <div className="status-message">
                {isLoading ? 'Loading...' : `Ops! ${error?.message}`}
            </div>
        )
    }

    return (
        <div className="category-page">
            <Header title="Recipes World" />

            <main className="container">
                <header className="page-header">
                    <Link title="Back" to="/categories" className="btn-back">
                        ← Back
                    </Link>
                    <h1>{category} Recipes</h1>
                </header>

                <section className="recipes-grid">
                    {meals?.length > 0 ? (
                        meals.map(meal => <RecipeCard key={meal.idMeal} meal={meal} />)
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </section>
            </main>
        </div>
    )
}
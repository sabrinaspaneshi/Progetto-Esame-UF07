import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Categories() {
    const { data: categories, isLoading, error } = useCategories()
    const { setSelectedCategory } = useAppContext()
    if (isLoading) return <p className="loading">Loading categories...</p>
    if (error) return <p className="error">Error: {error.message}</p>
    return (
        <div>
            <Header title="Discover recipes from all over the world" />
            <main className="container categories">
                <h1>Categories</h1>
                <div className="grid">
                    {categories?.map(category => (
                        <div key={category.idCategory} className="card">
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                            <div className="card-content">
                                <h3>{category.strCategory}</h3>
                                <Link
                                    to={`/category/${category.strCategory}`}
                                    className="btn"
                                    onClick={() => setSelectedCategory(category.strCategory)}
                                >
                                    View Recipes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

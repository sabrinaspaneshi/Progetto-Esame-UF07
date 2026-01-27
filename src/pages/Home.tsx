import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { RecipeCard } from '../components/RecipeCard'
import SearchFilters from '../components/SearchFilters'
import { useSearchMeals, useRandomRecipes, useMealsByArea, useMealsByIngredient } from '../hooks/useRecipes'
import { useAppContext } from '../contexts/AppContext'

export default function Home() {
    const [query, setQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')
    const { data: meals, isLoading, error } = useSearchMeals(debouncedQuery)
    const { data: randomMeals, isLoading: randomLoading } = useRandomRecipes()
    const { searchQuery, setSearchQuery, selectedArea, selectedIngredient } = useAppContext()
    const { data: areaMeals, isLoading: areaLoading } = useMealsByArea(selectedArea)
    const { data: ingredientMeals, isLoading: ingredientLoading } = useMealsByIngredient(selectedIngredient)

    useEffect(() => {
        if (searchQuery !== query) setQuery(searchQuery)
    }, [searchQuery])

    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedQuery(query)
            setSearchQuery(query)
        }, 500)
        return () => clearTimeout(t)
    }, [query, setSearchQuery])

    const handleSearch = (e: any) => {
        e.preventDefault()

    }
    let displayMeals = []
    if (selectedArea && selectedIngredient) {
        displayMeals = areaMeals || []
    } else if (selectedArea) {
        displayMeals = areaMeals || []
    } else if (selectedIngredient) {
        displayMeals = ingredientMeals || []
    } else if (debouncedQuery) {
        displayMeals = meals || []
    } else {
        displayMeals = randomMeals || []
    }

    return (
        <div>
            <Header title="Discover recipes from all over the world" />
            <main className="container">
                <h1>Home</h1>
                {selectedArea && <h2>Recipes from {selectedArea}</h2>}
                {selectedIngredient && <h2>Recipes with {selectedIngredient}</h2>}
                {!selectedArea && !selectedIngredient && debouncedQuery && <h2>Results for "{debouncedQuery}"</h2>}
                {!selectedArea && !selectedIngredient && !debouncedQuery && <h2>Recommended Recipes</h2>}
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search for a recipe..."
                    />
                    <button type="submit" className="btn">Search</button>
                </form>
                <SearchFilters />
                {debouncedQuery && isLoading && <p className="loading">Loading search results...</p>}
                {debouncedQuery && error && <p className="error">Error: {error.message}</p>}
                {selectedArea && areaLoading && <p className="loading">Loading recipes for area "{selectedArea}"...</p>}
                {selectedIngredient && ingredientLoading && <p className="loading">Loading recipes with ingredient "{selectedIngredient}"...</p>}
                {!debouncedQuery && !selectedArea && !selectedIngredient && randomLoading && <p className="loading">Loading random recipes...</p>}
                {displayMeals.length > 0 && (
                    <div className="grid">
                        {displayMeals.map(meal => (
                            <RecipeCard key={meal.idMeal} meal={meal} />
                        ))}
                    </div>
                )}
                {debouncedQuery && meals && meals.length === 0 && (
                    <p className="error">No recipes found for "{debouncedQuery}"</p>
                )}
            </main>
        </div>
    )
}

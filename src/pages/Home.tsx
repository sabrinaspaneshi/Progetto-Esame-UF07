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

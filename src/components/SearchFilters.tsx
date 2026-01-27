import { useState, useEffect } from 'react'


export default function SearchFilters() {
    const [selectedArea, setSelectedArea] = useState('')
    const [selectedIngredient, setSelectedIngredient] = useState('')
    const { data: areas } = useAreas()
    const { data: ingredients } = useIngredients()
    const { selectedArea: contextArea, selectedIngredient: contextIngredient, setSelectedArea: setContextArea, setSelectedIngredient: setContextIngredient } = useAppContext()

    useEffect(() => { setSelectedArea(contextArea) }, [contextArea])
    useEffect(() => { setSelectedIngredient(contextIngredient) }, [contextIngredient])

    const handleAreaChange = (a) => { setSelectedArea(a); setContextArea(a) }
    const handleIngredientChange = (i) => { setSelectedIngredient(i); setContextIngredient(i) }

    const handleAreaChange = (a) => { setSelectedArea(a); setContextArea(a) }
    const handleIngredientChange = (i) => { setSelectedIngredient(i); setContextIngredient(i) }
    const clearFilters = () => { setSelectedArea(''); setSelectedIngredient(''); setContextArea(''); setContextIngredient('') }

    return (
        <div className="search-filters">
            <h3>Search recipes by area and main ingredient</h3>
            <div className="filter-group">
                <label htmlFor="area-select">Area:</label>
                <select id="area-select" value={selectedArea} onChange={e => handleAreaChange(e.target.value)}>
                    <option value="">All areas</option>
                    {areas?.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="ingredient-select">Main Ingredient:</label>
                <select id="ingredient-select" value={selectedIngredient} onChange={e => handleIngredientChange(e.target.value)}>
                    <option value="">All ingredients</option>
                    {ingredients?.slice(0, 50).map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            {(selectedArea || selectedIngredient) && (
                <button onClick={clearFilters} className="btn secondary">Clear Filters</button>
            )}
        </div>
    )
}

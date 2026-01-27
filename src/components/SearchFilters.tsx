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
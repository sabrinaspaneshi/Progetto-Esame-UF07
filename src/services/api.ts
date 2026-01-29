import axios from 'axios'
import type { Meal, MealSummary, Category } from '../types/recipe'

const api = axios.create({ baseURL: 'https://www.themealdb.com/api/json/v1/1' })

export const searchMeals = async (query: string): Promise<Meal[]> => {
    try {
        const res = await api.get(`/search.php?s=${query}`)
        return res.data.meals || []
    } catch (e) {
        throw new Error('Failed to search meals')
    }
}

export const getMealById = async (id: string): Promise<Meal | null> => {
    try {
        const res = await api.get(`/lookup.php?i=${id}`)
        return res.data.meals?.[0] || null
    } catch (e) {
        throw new Error('Failed to get meal details')
    }
}

export const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await api.get('/categories.php')
        return res.data.categories || []
    } catch (e) {
        throw new Error('Failed to get categories')
    }
}

export const getAreas = async (): Promise<string[]> => {
    try {
        const res = await api.get('/list.php?a=list')
        return res.data.meals?.map((a: { strArea: string }) => a.strArea) || []
    } catch (e) {
        throw new Error('Failed to get areas')
    }
}

export const getIngredients = async (): Promise<string[]> => {
    try {
        const res = await api.get('/list.php?i=list')
        return res.data.meals?.map((i: { strIngredient: string }) => i.strIngredient) || []
    } catch (e) {
        throw new Error('Failed to get ingredients')
    }
}

export const getRandomRecipes = async (): Promise<Meal[]> => {
    try {
        const arr = Array.from({ length: 6 }, () => api.get('/random.php'))
        const resps = await Promise.all(arr)
        return resps.map(r => r.data.meals?.[0]).filter(Boolean)
    } catch (e) {
        throw new Error('Failed to get random recipes')
    }
}

export const getMealsByCategory = async (category: string): Promise<MealSummary[]> => {
    try {
        const res = await api.get(`/filter.php?c=${category}`)
        return res.data.meals || []
    } catch (e) {
        throw new Error('Failed to get meals by category')
    }
}

export const getMealsByArea = async (area: string): Promise<MealSummary[]> => {
    try {
        const res = await api.get(`/filter.php?a=${area}`)
        return res.data.meals || []
    } catch (e) {
        throw new Error('Failed to get meals by area')
    }
}

export const getMealsByIngredient = async (ingredient: string): Promise<MealSummary[]> => {
    try {
        const res = await api.get(`/filter.php?i=${ingredient}`)
        return res.data.meals || []
    } catch (e) {
        throw new Error('Failed to get meals by ingredient')
    }
}

export const addFavorite = async (meal: Meal): Promise<{ message: string }> => {
    return { message: 'Added to favorites' }
}

export const getFavorites = async (): Promise<Meal[]> => {
    const saved = localStorage.getItem('favoriteRecipes')
    const ids: string[] = saved ? JSON.parse(saved) : []
    if (ids.length === 0) return []
    const promises = ids.map(id => getMealById(id))
    const meals = await Promise.all(promises)
    return meals.filter((meal): meal is Meal => !!meal)
}

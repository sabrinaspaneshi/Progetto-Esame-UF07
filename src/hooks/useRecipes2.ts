import { useQuery, useMutation } from '@tanstack/react-query';
import { searchMeals, getMealById, getCategories, getAreas, getIngredients, getRandomRecipes, getMealsByCategory, getMealsByArea, getMealsByIngredient, addFavorite, getFavorites } from '../services/api';

export const queryKeys = {
    meals: (query: string) => ['meals', query],
    meal: (id: string) => ['meal', id],
    categories: ['categories'],
};

export function useSearchMeals(query: string) {
    return useQuery({
        queryKey: queryKeys.meals(query),
        queryFn: () => searchMeals(query),
        enabled: query.length > 0,
    });
}

export function useMeal(id: string | undefined) {
    return useQuery({
        queryKey: queryKeys.meal(id || ''),
        queryFn: () => getMealById(id || ''),
        enabled: !!id,
    });
}

export function useCategories() {
    return useQuery({
        queryKey: queryKeys.categories,
        queryFn: getCategories,
    });
}

export function useAreas() {
    return useQuery({
        queryKey: ['areas'],
        queryFn: getAreas,
    });
}

export function useIngredients() {
    return useQuery({
        queryKey: ['ingredients'],
        queryFn: getIngredients,
    });
}

export function useRandomRecipes() {
    return useQuery({
        queryKey: ['random-recipes'],
        queryFn: getRandomRecipes,
    });
}

export function useMealsByCategory(category: string) {
    return useQuery({
        queryKey: ['meals-by-category', category],
        queryFn: () => getMealsByCategory(category),
        enabled: !!category,
    });
}

export function useMealsByArea(area: string) {
    return useQuery({
        queryKey: ['meals-by-area', area],
        queryFn: () => getMealsByArea(area),
        enabled: !!area,
    });
}

export function useMealsByIngredient(ingredient: string) {
    return useQuery({
        queryKey: ['meals-by-ingredient', ingredient],
        queryFn: () => getMealsByIngredient(ingredient),
        enabled: !!ingredient,
    });
}

// Hook x aggiun. preferiti 
export function useAddFavorite() {
    return useMutation({
        mutationFn: addFavorite,
    });
}

export function useFavorites() {
    return useQuery({
        queryKey: ['favorites'],
        queryFn: getFavorites,
    });
}

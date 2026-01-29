export interface MealSummary {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory?: string;
}

export interface Meal extends MealSummary {
    strInstructions: string;
    strYoutube?: string;
    strTags?: string;
    [key: string]: any;
}

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

//risposta generica per le API
export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

// esempio di ricetta che non è stata usata direttamente però è utile per le estensioni 
export type RecipeType = 'meal' | 'drink' | 'dessert';

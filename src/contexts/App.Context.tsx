import React, { createContext, useContext, useEffect, useState, ReactNode, } from 'react';

type AppContextType = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedArea: string;
  setSelectedArea: (v: string) => void;
  selectedIngredient: string;
  setSelectedIngredient: (v: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

  // preferiti salvati in locale, così non spariscono a ogni refresh
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('fav_recipes');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Errore nel recupero dei preferiti', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('fav_recipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);


  const toggleFavorite = (id: string) => {
    setFavoriteRecipes(favs =>
      favs.includes(id)
        ? favs.filter(f => f !== id)
        : [...favs, id]
    );
  };

  const addToFavorites = (id: string) => {
    setFavoriteRecipes(favs =>
      favs.includes(id) ? favs : [...favs, id]
    );
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteRecipes(favs => favs.filter(f => f !== id));
  };

  const isFavorite = (id: string) => favoriteRecipes.includes(id);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedArea,
        setSelectedArea,
        selectedIngredient,
        setSelectedIngredient,
        toggleFavorite,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useAppContext usato fuori da AppProvider'
    );
  }

  return context;
};

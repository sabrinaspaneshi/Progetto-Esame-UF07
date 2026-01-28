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
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

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
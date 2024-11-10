import React, { createContext, useContext, useState } from 'react'

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([]);

    const addFavorite = (movie) => {
        if (!favorite.find((fav) => fav.id === movie.id)) {
            setFavorite([...favorite, movie]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorite(favorite.filter((movie) => movie.id !== movieId));
    };

    return (
        <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

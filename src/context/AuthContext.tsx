// Define what it looks like, what information will I have here

import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// State intial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// I use it to tell React what it looks like and what the context exposes

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void; 
    changeFavoriteIcon: (iconName: string) => void;
}

// create the context
export const AuthContext = createContext({} as AuthContextProps);

// Component proveedor del estado

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon
        }}>
            { children }
        </AuthContext.Provider>
    )
       
}
// Define what it looks like, what information will I have here

import React, { createContext } from 'react'

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
}

// create the context
export const AuthContext = createContext({} as AuthContextProps);

// Component proveedor del estado

export const AuthProvider = ({ children }: any) => {

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
                {}
        </AuthContext.Provider>
    )
       
}
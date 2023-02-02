import React, { createContext } from 'react'

const UserContext = createContext<string>('Client')
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

'use client'

// This code defines a template for creating a context provider and a custom hook in a React application using TypeScript. The ContentProvider component wraps its children with a context provider, allowing other components to access and update the currentContent state. The useContent hook is used to consume the context values within other components.

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface ContentContextProps {
  currentContent: string
  changeContent: (newContent: string) => void
}
interface ContentProviderProps {
  children: ReactNode
}

const defaultValues = {
  currentContent: '',
  changeContent: () => {},
}

const ContentContext = createContext<ContentContextProps>(defaultValues)

const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<string>(
    defaultValues.currentContent,
  )

  const changeContent = (newContent: string) => {
    setCurrentContent(newContent)
  }

  const contextValues: ContentContextProps = {
    currentContent,
    changeContent,
  }

  return (
    <ContentContext.Provider value={contextValues}>
      {children}
    </ContentContext.Provider>
  )
}

const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export { ContentProvider, useContent }

import { createContext, useContext, ReactNode } from 'react';
import { EditableContent } from '../types';
import staticContent from '../content.json';

interface ContentContextType {
  content: EditableContent;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  // Use the static content directly from the editable content.json file
  const content = staticContent as EditableContent;

  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}

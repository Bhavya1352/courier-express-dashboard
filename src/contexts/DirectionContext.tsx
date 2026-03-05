import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
  direction: Direction;
  toggleDirection: () => void;
  isRTL: boolean;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};

interface DirectionProviderProps {
  children: ReactNode;
}

export const DirectionProvider = ({ children }: DirectionProviderProps) => {
  const [direction, setDirection] = useState<Direction>(() => {
    const saved = localStorage.getItem('direction');
    return (saved as Direction) || 'ltr';
  });

  const toggleDirection = () => {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    localStorage.setItem('direction', newDirection);
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.setAttribute('data-direction', direction);
  }, [direction]);

  const value = {
    direction,
    toggleDirection,
    isRTL: direction === 'rtl',
  };

  return (
    <DirectionContext.Provider value={value}>
      {children}
    </DirectionContext.Provider>
  );
};
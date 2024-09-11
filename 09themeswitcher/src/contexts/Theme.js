import { createContext, useContext } from 'react';

// Create the ThemeContext with default values
export const ThemeContext = createContext({
  themeMode: 'light',    // Default mode is 'light'
  darkTheme: () => {},   // Placeholder function for dark mode
  lightTheme: () => {}   // Placeholder function for light mode
});

// Export the ThemeProvider from ThemeContext
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
const useTheme = () => useContext(ThemeContext);

export default useTheme;

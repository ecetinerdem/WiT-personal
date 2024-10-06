import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Content from './components/Content'; // Import the Content component

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <LanguageProvider>
        <Content />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
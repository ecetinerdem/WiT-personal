import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Content from './components/Content'; 
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <LanguageProvider>
        <Content darkMode={darkMode} setDarkMode={setDarkMode}/>
      </LanguageProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
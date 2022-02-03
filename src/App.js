import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import LandingPage from './pages/LandingPage';
import ThemeContext from './contexts/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useResultData from './hooks/useResultData';
import useThemeContext from './hooks/useThemeContext';
import NotFound from './NotFound';
import Result from './Result';
import Start from './Start';
import './App.css';

const App: React.FC = () => {
  const { resultData, loading, error } = useResultData();
  const { isDarkTheme, toggleTheme } = useThemeContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Router>
      <div className={`app app${isDarkTheme ? '-dark' : '-light'}`}>
        <div id="header">
          <span onClick={toggleTheme}>Switch Theme</span>
          <span onClick={toggleTheme}>Contact Form</span>
        </div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/search/:query" element={<Result results={resultData} />} />
          <Route path="/search" element={<Result results={resultData} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

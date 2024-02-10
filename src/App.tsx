import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Result from './Result';
import Start from './Start';
import useResultData from './hooks/useResultData';

const App: React.FC = () => {
  const { resultData, loading, error } = useResultData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/search/:query" element={<Result results={resultData} />} />
        <Route path="/search" element={<Result results={resultData} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import KnowledgeListPage from './pages/KnowledgeListPage';
import KnowledgeDetailPage from './pages/KnowledgeDetailPage';
import CasesListPage from './pages/CasesListPage';
import PracticePage from './pages/PracticePage';
import VisualizationPage from './pages/VisualizationPage';
import { initMathJax } from './utils/mathjax';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    initMathJax();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/knowledge" element={<KnowledgeListPage />} />
            <Route path="/knowledge/:categoryId" element={<KnowledgeListPage />} />
            <Route path="/knowledge/:categoryId/:knowledgeId" element={<KnowledgeDetailPage />} />
            <Route path="/cases" element={<CasesListPage />} />
            <Route path="/cases/:caseId" element={<CasesListPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/visualization" element={<VisualizationPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>© 2026 机器学习在线学习平台</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
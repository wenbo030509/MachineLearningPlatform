import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="logo">
          <Link to="/">机器学习在线学习平台</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/knowledge" className="nav-link">知识点</Link>
          <Link to="/cases" className="nav-link">案例库</Link>
          <Link to="/practice" className="nav-link">练习区</Link>
          <Link to="/visualization" className="nav-link">可视化工具</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>首页</Link>
          <Link to="/knowledge" className="mobile-nav-link" onClick={toggleMenu}>知识点</Link>
          <Link to="/cases" className="mobile-nav-link" onClick={toggleMenu}>案例库</Link>
          <Link to="/practice" className="mobile-nav-link" onClick={toggleMenu}>练习区</Link>
          <Link to="/visualization" className="mobile-nav-link" onClick={toggleMenu}>可视化工具</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
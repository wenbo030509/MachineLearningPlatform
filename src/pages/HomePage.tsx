import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/knowledge';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="container">
          <h1>机器学习在线学习平台</h1>
          <p>面向产品经理（尤其广告/风控方向）、转岗人群的轻量化机器学习学习平台</p>
          <div className="hero-buttons">
            <Link to="/knowledge" className="btn-primary">开始学习</Link>
            <Link to="/cases" className="btn-secondary">查看案例</Link>
          </div>
        </div>
      </div>
      
      <div className="categories-section">
        <div className="container">
          <h2>机器学习主要类别</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <Link to={`/knowledge/${category.id}`}>
                  <h3>{category.title}</h3>
                  <p>{category.children.length} 个知识点</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>平台特色</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>通俗语言讲解</h3>
              <p>用通俗语言拆解技术概念，避免晦涩代码与数学推导</p>
            </div>
            <div className="feature-card">
              <h3>绑定业务场景</h3>
              <p>绑定广告投放、风控反欺诈等真实业务场景，实现「知识→落地」的衔接</p>
            </div>
            <div className="feature-card">
              <h3>PM友好</h3>
              <p>适配PM工作习惯，提供可直接复用的业务案例与思考框架</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
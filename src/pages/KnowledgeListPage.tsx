import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, getCategoryById } from '../data/knowledge';

const KnowledgeListPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filterLevel, setFilterLevel] = useState<'all' | 'basic' | 'advanced'>('all');
  const [filterScene, setFilterScene] = useState<'all' | 'ad' | 'risk'>('all');

  const currentCategory = categoryId ? getCategoryById(categoryId) : null;
  const displayCategories = currentCategory ? [currentCategory] : categories;

  const filterKnowledgePoints = (knowledgePoints: any[]) => {
    return knowledgePoints.filter(kp => {
      const levelMatch = filterLevel === 'all' || kp.level === filterLevel;
      const sceneMatch = filterScene === 'all' || kp.scenes.includes(filterScene);
      return levelMatch && sceneMatch;
    });
  };

  return (
    <div className="knowledge-list-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首页</Link> / 
          <Link to="/knowledge">知识点</Link>
          {currentCategory && ` / ${currentCategory.title}`}
        </div>
        
        <h1>{currentCategory ? currentCategory.title : '机器学习知识点'}</h1>
        
        <div className="filter-section">
          <div className="filter-group">
            <label>难度：</label>
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value as any)}>
              <option value="all">全部</option>
              <option value="basic">基础</option>
              <option value="advanced">进阶</option>
            </select>
          </div>
          <div className="filter-group">
            <label>业务场景：</label>
            <select value={filterScene} onChange={(e) => setFilterScene(e.target.value as any)}>
              <option value="all">全部</option>
              <option value="ad">广告</option>
              <option value="risk">风控</option>
            </select>
          </div>
        </div>
        
        <div className="knowledge-grid">
          {displayCategories.map(category => (
            <div key={category.id} className="category-section">
              {!currentCategory && (
                <h2 className="category-title">
                  <Link to={`/knowledge/${category.id}`}>{category.title}</Link>
                </h2>
              )}
              <div className="knowledge-cards">
                {filterKnowledgePoints(category.children).map(kp => (
                  <div key={kp.id} className="knowledge-card">
                    <Link to={`/knowledge/${category.id}/${kp.id}`}>
                      <h3>{kp.title}</h3>
                      <p>{kp.description}</p>
                      <div className="knowledge-meta">
                        <span className={`level-badge ${kp.level}`}>
                          {kp.level === 'basic' ? '基础' : '进阶'}
                        </span>
                        {kp.isRiskPMEssential && (
                          <span className="risk-pm-badge">风控PM必备</span>
                        )}
                        <div className="scene-tags">
                          {kp.scenes.includes('ad') && (
                            <span className="scene-tag ad">广告</span>
                          )}
                          {kp.scenes.includes('risk') && (
                            <span className="scene-tag risk">风控</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeListPage;
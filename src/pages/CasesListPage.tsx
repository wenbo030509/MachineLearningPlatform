import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cases, getCase } from '../data/cases';

const CasesListPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [filterScene, setFilterScene] = useState<'all' | 'ad' | 'risk'>('all');

  const currentCase = caseId ? getCase(caseId) : null;
  const filteredCases = filterScene === 'all' ? cases : cases.filter(c => c.scene === filterScene);

  if (currentCase) {
    return (
      <div className="case-detail-page">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">首页</Link> / 
            <Link to="/cases">案例库</Link> / 
            {currentCase.title}
          </div>
          
          <div className="case-header">
            <h1>{currentCase.title}</h1>
            <span className={`scene-badge ${currentCase.scene}`}>
              {currentCase.scene === 'ad' ? '广告场景' : '风控场景'}
            </span>
          </div>
          
          <div className="case-content">
            <section>
              <h2>业务背景</h2>
              <p>{currentCase.background}</p>
            </section>
            
            <section>
              <h2>问题分析</h2>
              <p>{currentCase.analysis}</p>
            </section>
            
            <section>
              <h2>技术选型</h2>
              <p>{currentCase.technology}</p>
            </section>
            
            <section>
              <h2>落地步骤</h2>
              <ol>
                {currentCase.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
            
            <section>
              <h2>效果指标</h2>
              <p>{currentCase.metrics}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cases-list-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首页</Link> / 
          <Link to="/cases">案例库</Link>
        </div>
        
        <h1>业务场景案例库</h1>
        
        <div className="filter-section">
          <div className="filter-group">
            <label>业务场景：</label>
            <select value={filterScene} onChange={(e) => setFilterScene(e.target.value as any)}>
              <option value="all">全部</option>
              <option value="ad">广告场景</option>
              <option value="risk">风控场景</option>
            </select>
          </div>
        </div>
        
        <div className="cases-grid">
          {filteredCases.map(caseItem => (
            <div key={caseItem.id} className="case-card">
              <Link to={`/cases/${caseItem.id}`}>
                <h3>{caseItem.title}</h3>
                <span className={`scene-badge ${caseItem.scene}`}>
                  {caseItem.scene === 'ad' ? '广告场景' : '风控场景'}
                </span>
                <p className="case-description">{caseItem.background.substring(0, 100)}...</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasesListPage;
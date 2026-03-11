import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getKnowledgePoint, getCategoryById } from '../data/knowledge';
import { getCasesByKnowledge } from '../data/cases';
import { typesetMathJax } from '../utils/mathjax';

const KnowledgeDetailPage: React.FC = () => {
  const { categoryId, knowledgeId } = useParams<{ categoryId: string; knowledgeId: string }>();
  const category = getCategoryById(categoryId!);
  const knowledgePoint = getKnowledgePoint(knowledgeId!);
  const relatedCases = getCasesByKnowledge(knowledgeId!);

  useEffect(() => {
    // 延迟触发MathJax渲染，确保DOM已经更新
    setTimeout(() => {
      typesetMathJax();
    }, 100);
  }, [knowledgeId]);

  if (!knowledgePoint) {
    return (
      <div className="container">
        <h1>知识点不存在</h1>
      </div>
    );
  }

  return (
    <div className="knowledge-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首页</Link> / 
          <Link to="/knowledge">知识点</Link> / 
          <Link to={`/knowledge/${categoryId}`}>{category?.title}</Link> / 
          {knowledgePoint.title}
        </div>
        
        <div className="knowledge-header">
          <h1>{knowledgePoint.title}</h1>
          <div className="knowledge-meta">
            <span className={`level-badge ${knowledgePoint.level}`}>
              {knowledgePoint.level === 'basic' ? '基础' : '进阶'}
            </span>
            {knowledgePoint.isRiskPMEssential && (
              <span className="risk-pm-badge">风控PM必备</span>
            )}
            <div className="scene-tags">
              {knowledgePoint.scenes.includes('ad') && (
                <span className="scene-tag ad">广告</span>
              )}
              {knowledgePoint.scenes.includes('risk') && (
                <span className="scene-tag risk">风控</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="knowledge-content">
          <section className="principle-section">
            <h2>原理讲解</h2>
            <p>{knowledgePoint.content.principle}</p>
          </section>
          
          <section className="scenes-section">
            <h2>业务场景</h2>
            <p>{knowledgePoint.content.scenes}</p>
          </section>
          
          <section className="cases-section">
            <h2>案例拆解</h2>
            <p>{knowledgePoint.content.cases}</p>
          </section>
          
          <section className="key-points-section">
            <h2>核心要点</h2>
            <ul>
              {knowledgePoint.content.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </div>
        
        {relatedCases.length > 0 && (
          <div className="related-cases">
            <h2>相关案例</h2>
            <div className="cases-grid">
              {relatedCases.map(caseItem => (
                <div key={caseItem.id} className="case-card">
                  <Link to={`/cases/${caseItem.id}`}>
                    <h3>{caseItem.title}</h3>
                    <span className={`scene-badge ${caseItem.scene}`}>
                      {caseItem.scene === 'ad' ? '广告场景' : '风控场景'}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeDetailPage;
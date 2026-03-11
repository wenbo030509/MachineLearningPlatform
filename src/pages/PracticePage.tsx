import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PracticeQuestion {
  id: string;
  type: 'scenario' | 'metric' | 'choice';
  title: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'q1',
    type: 'scenario',
    title: '场景设计题',
    question: '设计广告用户聚类的3个核心特征维度',
    answer: '1. 用户行为特征：浏览、点击、购买等行为数据\n2. 用户属性特征：年龄、性别、地域等 demographic 数据\n3. 广告互动特征：广告点击率、转化率、停留时间等',
    explanation: '用户行为特征反映用户的兴趣和购买意图，用户属性特征帮助定向投放，广告互动特征评估广告效果。'
  },
  {
    id: 'q2',
    type: 'metric',
    title: '指标解读题',
    question: '解读风控模型的混淆矩阵',
    answer: '混淆矩阵包含四个指标：\n1. 真正例(TP)：模型正确预测为正例的样本数\n2. 假正例(FP)：模型错误预测为正例的样本数\n3. 真负例(TN)：模型正确预测为负例的样本数\n4. 假负例(FN)：模型错误预测为负例的样本数\n\n基于这些指标可以计算准确率、精确率、召回率和F1分数。',
    explanation: '混淆矩阵是评估分类模型性能的重要工具，通过分析四个象限的数据，可以了解模型在不同情况下的表现。'
  },
  {
    id: 'q3',
    type: 'choice',
    title: '方案选择题',
    question: '选择适合欺诈识别的算法并说明理由',
    options: [
      '逻辑回归',
      '决策树',
      '随机森林',
      '支持向量机'
    ],
    answer: '随机森林',
    explanation: '随机森林适合欺诈识别的原因：\n1. 集成多个决策树，减少过拟合风险\n2. 能够处理高维特征，适合复杂的欺诈检测场景\n3. 对异常值不敏感，能够识别异常交易模式\n4. 可以评估特征重要性，帮助理解欺诈因素'
  },
  {
    id: 'q4',
    type: 'scenario',
    title: '场景设计题',
    question: '设计风控规则引擎的3个核心步骤',
    answer: '1. 特征工程：选择和构建有效的风控特征\n2. 规则制定：基于历史数据和专家经验制定规则\n3. 规则评估与优化：定期评估规则效果并进行调整',
    explanation: '特征工程是基础，规则制定是核心，规则评估与优化是保证规则持续有效的关键。'
  },
  {
    id: 'q5',
    type: 'metric',
    title: '指标解读题',
    question: '解释广告投放中的CTR和CVR指标',
    answer: 'CTR(Click-Through Rate)：点击率，即广告点击次数与广告展示次数的比率，反映广告的吸引力。\nCVR(Conversion Rate)：转化率，即广告转化次数与广告点击次数的比率，反映广告的效果。',
    explanation: 'CTR和CVR是评估广告效果的重要指标，CTR衡量广告的吸引力，CVR衡量广告的转化效果。'
  }
];

const PracticePage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <div className="practice-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首页</Link> / 
          <Link to="/practice">练习区</Link>
        </div>
        
        <h1>轻量化练习区</h1>
        <p>针对知识点设计PM友好型练习（无代码要求）</p>
        
        <div className="practice-questions">
          {practiceQuestions.map(question => (
            <div key={question.id} className="practice-card">
              <div className="practice-header" onClick={() => setSelectedQuestion(selectedQuestion === question.id ? null : question.id)}>
                <h3>{question.title}</h3>
                <span className="question-type">{question.type === 'scenario' ? '场景设计' : question.type === 'metric' ? '指标解读' : '方案选择'}</span>
              </div>
              <div className="practice-content">
                <p className="question">{question.question}</p>
                {question.options && (
                  <div className="options">
                    {question.options.map((option, index) => (
                      <div key={index} className="option">
                        <span className="option-label">{String.fromCharCode(65 + index)}</span>
                        <span className="option-text">{option}</span>
                      </div>
                    ))}
                  </div>
                )}
                {selectedQuestion === question.id && (
                  <div className="answer-section">
                    <h4>参考答案</h4>
                    <pre className="answer">{question.answer}</pre>
                    <h4>思路解析</h4>
                    <p className="explanation">{question.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
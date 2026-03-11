// 配置MathJax
const mathjaxConfig = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

// 扩展Window接口以包含MathJax
declare global {
  interface Window {
    MathJax?: any;
  }
};

// 初始化MathJax
export const initMathJax = () => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.MathJax = {
      ...mathjaxConfig,
      startup: {
        typeset: true
      }
    };

    // 动态加载MathJax脚本
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  }
};

// 触发MathJax重新渲染
export const typesetMathJax = () => {
  if (typeof window !== 'undefined' && window.MathJax) {
    // @ts-ignore
    window.MathJax.typeset();
  }
};
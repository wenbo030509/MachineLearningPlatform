import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';
import { getVisualizationData } from '../data/visualization';

const VisualizationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'confusion' | 'roc' | 'scatter' | 'time'>('confusion');
  const chartRef = useRef<HTMLDivElement>(null);
  let chart: echarts.ECharts | null = null;

  useEffect(() => {
    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      updateChart();

      window.addEventListener('resize', () => {
        chart?.resize();
      });

      return () => {
        chart?.dispose();
        window.removeEventListener('resize', () => {
          chart?.resize();
        });
      };
    }
  }, [activeTab]);

  const updateChart = () => {
    if (!chart) return;

    switch (activeTab) {
      case 'confusion':
        renderConfusionMatrix();
        break;
      case 'roc':
        renderROC();
        break;
      case 'scatter':
        renderScatter();
        break;
      case 'time':
        renderTimeSeries();
        break;
    }
  };

  const renderConfusionMatrix = () => {
    if (!chart) return;
    const data = getVisualizationData.confusionMatrix();
    const option = {
      title: {
        text: '混淆矩阵',
        left: 'center'
      },
      tooltip: {
        position: 'top'
      },
      grid: {
        height: '50%',
        top: '15%'
      },
      xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: {
          interval: 0
        }
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '5%'
      },
      series: [
        {
          name: '混淆矩阵',
          type: 'heatmap',
          data: data.data.flatMap((row, i) => row.map((value, j) => [j, i, value])),
          label: {
            show: true
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    chart.setOption(option);
  };

  const renderROC = () => {
    if (!chart) return;
    const data = getVisualizationData.roc();
    const option = {
      title: {
        text: 'ROC曲线',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          return `FPR: ${params[0].value[0].toFixed(2)}, TPR: ${params[0].value[1].toFixed(2)}`;
        }
      },
      xAxis: {
        type: 'value',
        name: '假正例率(FPR)',
        min: 0,
        max: 1
      },
      yAxis: {
        type: 'value',
        name: '真正例率(TPR)',
        min: 0,
        max: 1
      },
      series: [
        {
          name: 'ROC曲线',
          type: 'line',
          data: data.fpr.map((fpr, index) => [fpr, data.tpr[index]]),
          smooth: true,
          lineStyle: {
            width: 2
          },
          areaStyle: {
            opacity: 0.3
          }
        },
        {
          name: '对角线',
          type: 'line',
          data: [[0, 0], [1, 1]],
          lineStyle: {
            type: 'dashed',
            color: '#999'
          },
          symbol: 'none'
        }
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            bottom: '10%',
            style: {
              text: `AUC: ${data.auc}`,
              fontSize: 16,
              fontWeight: 'bold'
            }
          }
        ]
      }
    };
    chart.setOption(option);
  };

  const renderScatter = () => {
    if (!chart) return;
    const data = getVisualizationData.scatter();
    const option = {
      title: {
        text: '用户分群散点图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
          return `类别: ${params.data[2] === 0 ? '类别1' : '类别2'}`;
        }
      },
      xAxis: {
        type: 'value',
        name: '特征1'
      },
      yAxis: {
        type: 'value',
        name: '特征2'
      },
      series: [
        {
          name: '用户分群',
          type: 'scatter',
          data: data.x.map((x, index) => [x, data.y[index], data.labels[index]]),
          symbolSize: 10,
          itemStyle: {
            color: function (params: any) {
              return params.data[2] === 0 ? '#1890ff' : '#f5222d';
            }
          }
        }
      ]
    };
    chart.setOption(option);
  };

  const renderTimeSeries = () => {
    if (!chart) return;
    const data = getVisualizationData.timeSeries();
    const option = {
      title: {
        text: 'LSTM风控数据趋势图',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.x
      },
      yAxis: {
        type: 'value',
        name: '风险值'
      },
      series: [
        {
          name: '风险趋势',
          type: 'line',
          data: data.y,
          smooth: true,
          lineStyle: {
            width: 2
          },
          areaStyle: {
            opacity: 0.3
          }
        }
      ]
    };
    chart.setOption(option);
  };

  return (
    <div className="visualization-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首页</Link> / 
          <Link to="/visualization">可视化工具</Link>
        </div>
        
        <h1>模型可视化工具</h1>
        <p>无需代码即可查看模型效果</p>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'confusion' ? 'active' : ''}`}
            onClick={() => setActiveTab('confusion')}
          >
            混淆矩阵
          </button>
          <button 
            className={`tab ${activeTab === 'roc' ? 'active' : ''}`}
            onClick={() => setActiveTab('roc')}
          >
            ROC曲线
          </button>
          <button 
            className={`tab ${activeTab === 'scatter' ? 'active' : ''}`}
            onClick={() => setActiveTab('scatter')}
          >
            聚类散点图
          </button>
          <button 
            className={`tab ${activeTab === 'time' ? 'active' : ''}`}
            onClick={() => setActiveTab('time')}
          >
            时序趋势图
          </button>
        </div>
        
        <div className="chart-container">
          <div ref={chartRef} style={{ width: '100%', height: '500px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPage;
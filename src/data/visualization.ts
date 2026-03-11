export interface ConfusionMatrixData {
  labels: string[];
  data: number[][];
}

export interface ROCData {
  fpr: number[];
  tpr: number[];
  auc: number;
}

export interface ScatterData {
  x: number[];
  y: number[];
  labels: number[];
}

export interface TimeSeriesData {
  x: string[];
  y: number[];
}

export const confusionMatrixData: ConfusionMatrixData = {
  labels: ['正例', '负例'],
  data: [
    [95, 5],
    [8, 92]
  ]
};

export const rocData: ROCData = {
  fpr: [0, 0.02, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  tpr: [0, 0.3, 0.5, 0.65, 0.75, 0.82, 0.88, 0.92, 0.94, 0.96, 0.97, 0.98, 1],
  auc: 0.93
};

export const scatterData: ScatterData = {
  x: [1.2, 2.4, 1.8, 3.1, 2.7, 4.2, 3.8, 4.5, 5.1, 4.9, 6.2, 5.8, 6.5, 7.1, 6.8],
  y: [2.1, 1.8, 3.2, 2.5, 3.8, 3.1, 4.5, 4.2, 5.1, 5.8, 4.9, 5.5, 6.2, 5.9, 6.8],
  labels: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
};

export const timeSeriesData: TimeSeriesData = {
  x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  y: [120, 132, 101, 134, 90, 230, 210, 232, 210, 340, 310, 350]
};

export const getVisualizationData = {
  confusionMatrix: () => confusionMatrixData,
  roc: () => rocData,
  scatter: () => scatterData,
  timeSeries: () => timeSeriesData
};
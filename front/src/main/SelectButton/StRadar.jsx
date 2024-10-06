import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, RadarController, PointElement, LineElement, Filler } from 'chart.js';

// Chart.js 구성 요소 등록
ChartJS.register(
  RadialLinearScale,
  RadarController,
  PointElement,
  LineElement,
  Filler // Filler 플러그인 등록
);

// 데이터와 색상 설정
const data = [8, 7.5, 3]; // 데이터 값
const COLOR = {
  ORANGE_1: 'rgba(255, 108, 61, 1)', // 선 색상
  ORANGE_1_LIGHT: 'rgba(255, 108, 61, 0.2)', // 배경 색상
  GRAY_9E: 'rgba(158, 158, 158, 0.5)',
  BLACK: '#000000'
};

// 차트 데이터 구성
const chartData = {
  labels: ['만족도', '감성지수', '취업률'],
  datasets: [
    {
      label: '팀 점수',
      data: data,
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
        gradient.addColorStop(0, 'rgba(255, 108, 61, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 108, 61, 0.5)');
        return gradient;
      },
      borderColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
        gradient.addColorStop(0, 'rgba(255, 108, 61, 1)');
        gradient.addColorStop(1, 'rgba(255, 108, 61, 0.8)');
        return gradient;
      },
      borderWidth: 2,
      pointBackgroundColor: COLOR.ORANGE_1,
      pointBorderColor: '#ffffff', // 포인트 테두리 색상
      pointBorderWidth: 1, // 포인트 테두리 두께
      pointRadius: 4, // 포인트 크기
      fill: true,
    },
  ],
};

// 차트 옵션 구성
const chartOptions = {
  scales: {
    r: {
      ticks: {
        stepSize: 2.5,
        display: false, // 축의 값 표시 안 함
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)', // 배경 그리드 색상
        borderDash: [5, 5], // 점선 스타일
        borderWidth: 1, // 그리드 선 두께
      },
      pointLabels: {
        font: {
          size: 12,
          weight: '700',
          family: 'Pretendard',
        },
        color: COLOR.BLACK,
      },
      angleLines: {
        display: false, // 각도 선 표시
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    filler: {
      propagate: true,
    },
  },
  animation: {
    duration: 1000,
    easing: 'easeInOutQuad',
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 2,
      pointBackgroundColor: COLOR.ORANGE_1,
      pointBorderColor: '#ffffff', // 포인트 테두리 색상
      pointBorderWidth: 1, // 포인트 테두리 두께
      shadowColor: 'rgba(0, 0, 0, 0.3)', // 그림자 색상
      shadowBlur: 6, // 그림자 흐림 정도
      shadowOffsetX: 2, // 그림자 x 오프셋
      shadowOffsetY: 2, // 그림자 y 오프셋
    },
  },
};

export default function StRadar() {
  return (
    <div>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
}

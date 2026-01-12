<template>
  <div class="result-page" ref="resultPage">
    <div class="container">
      <div class="header">
        <h1 class="title">测试结果</h1>
        <p class="subtitle">麋鹿·性偏向测试</p>
      </div>

      <div class="content">
        <div class="chart-section card">
          <h2 class="section-title">维度得分概览</h2>
          <div class="top-dimension" v-if="topDimension">
            <div class="top-dimension-label">最高分维度</div>
            <div class="top-dimension-name">{{ topDimension.name }}</div>
            <div class="top-dimension-score">{{ topDimension.score }} / 5.0</div>
          </div>
          <div ref="radarChart" class="radar-chart"></div>
        </div>

        <div class="dimensions-container">
          <div class="dimensions-list">
            <div 
              v-for="dimension in sortedDimensions" 
              :key="dimension"
              class="dimension-item"
              :class="getScoreClass(results[dimension].score)"
            >
              <div class="dimension-header">
                <h3 class="dimension-name">{{ dimension }}</h3>
                <div class="dimension-score">
                  <span class="score-value">{{ results[dimension].score }}</span>
                  <span class="score-max">/5.0</span>
                </div>
              </div>
              <p class="dimension-description">{{ dimensionData[dimension].description }}</p>
              <div class="dimension-result">
                <div class="result-level" :class="results[dimension].level">
                  {{ levelLabels[results[dimension].level] }}
                </div>
                <p class="result-text">{{ dimensionData[dimension][results[dimension].level] }}</p>
              </div>
              <div v-if="dimensionData[dimension].warning" class="warning-box">
                <span class="warning-icon">⚠️</span>
                <p class="warning-text">{{ dimensionData[dimension].warning }}</p>
              </div>
              <p v-if="dimensionData[dimension].note" class="note-text">{{ dimensionData[dimension].note }}</p>
            </div>
          </div>
        </div>

        <div class="actions">
          <button class="btn-primary" @click="handleRestart">
            <el-icon><Refresh /></el-icon>
            重新测试
          </button>
          <button class="btn-secondary" @click="handleShare">
            <el-icon><Share /></el-icon>
            分享结果
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { Refresh, Share } from '@element-plus/icons-vue'
import { questionsData, dimensionCategories } from '../data/questions'
import * as echarts from 'echarts'
import html2canvas from 'html2canvas'

const props = defineProps({
  results: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['restart', 'share'])

const radarChart = ref(null)
const resultPage = ref(null)
const dimensionData = questionsData['sexual-preference'].results

const categoryLabels = {
  active: '主动型维度',
  passive: '被动型维度',
  special: '特殊型维度'
}

const levelLabels = {
  low: '低',
  medium: '中',
  high: '高'
}

const sortedDimensions = computed(() => {
  const dimensions = Object.keys(props.results)
  return dimensions.sort((a, b) => {
    return props.results[b].score - props.results[a].score
  })
})

const topDimension = computed(() => {
  const dimensions = Object.keys(props.results)
  let maxScore = 0
  let topDim = null
  
  dimensions.forEach(dimension => {
    if (props.results[dimension].score > maxScore) {
      maxScore = props.results[dimension].score
      topDim = {
        name: dimension,
        score: maxScore
      }
    }
  })
  
  return topDim
})

const getScoreClass = (score) => {
  if (score <= 2.33) return 'score-low'
  if (score <= 3.67) return 'score-medium'
  return 'score-high'
}

const handleRestart = () => {
  emit('restart')
}

const handleShare = async () => {
  try {
    const element = resultPage.value
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#FAFAFA',
      logging: false
    })
    
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = '麋鹿性偏向测试结果.png'
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    })
  } catch (error) {
    console.error('生成图片失败:', error)
  }
}

const initRadarChart = () => {
  if (!radarChart.value) return

  const chart = echarts.init(radarChart.value)
  
  const dimensions = Object.keys(props.results)
  const scores = dimensions.map(d => props.results[d].score)
  
  const option = {
    radar: {
      indicator: dimensions.map(d => ({
        name: d,
        max: 5
      })),
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: '#666',
        fontSize: 14
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(155, 89, 182, 0.1)'
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(155, 89, 182, 0.2)'
        }
      }
    },
    series: [{
      type: 'radar',
      data: [{
        value: scores,
        name: '得分',
        areaStyle: {
          color: 'rgba(155, 89, 182, 0.3)'
        },
        lineStyle: {
          color: '#9B59B6',
          width: 2
        },
        itemStyle: {
          color: '#9B59B6'
        }
      }]
    }]
  }
  
  chart.setOption(option)
  
  window.addEventListener('resize', () => {
    chart.resize()
  })
}

onMounted(() => {
  nextTick(() => {
    initRadarChart()
  })
})
</script>

<style scoped>
.result-page {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #FAFAFA 0%, #F5F0FF 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: #7F8C8D;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(155, 89, 182, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(155, 89, 182, 0.12);
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #2C3E50;
  margin: 0 0 16px 0;
}

.chart-section {
  padding: 30px;
}

.top-dimension {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #F5E6FF 0%, #E8D5F0 100%);
  border-radius: 12px;
  margin-bottom: 24px;
}

.top-dimension-label {
  font-size: 14px;
  color: #7F8C8D;
  margin-bottom: 8px;
}

.top-dimension-name {
  font-size: 28px;
  font-weight: 700;
  color: #9B59B6;
  margin-bottom: 8px;
}

.top-dimension-score {
  font-size: 20px;
  font-weight: 600;
  color: #8E44AD;
}

.radar-chart {
  width: 100%;
  height: 400px;
}

.dimensions-container {
  margin-top: 20px;
}

.dimensions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dimension-item {
  padding: 20px;
  border-radius: 12px;
  background: #FAFAFA;
  border-left: 4px solid #BDC3C7;
  transition: all 0.3s ease;
}

.dimension-item.score-low {
  border-left-color: #3498DB;
  background: linear-gradient(135deg, #EBF5FB 0%, #FAFAFA 100%);
}

.dimension-item.score-medium {
  border-left-color: #F39C12;
  background: linear-gradient(135deg, #FEF5E7 0%, #FAFAFA 100%);
}

.dimension-item.score-high {
  border-left-color: #E74C3C;
  background: linear-gradient(135deg, #FDEDEC 0%, #FAFAFA 100%);
}

.dimension-item:hover {
  transform: translateX(4px);
}

.dimension-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.dimension-name {
  font-size: 18px;
  font-weight: 600;
  color: #2C3E50;
  margin: 0;
}

.dimension-score {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.score-value {
  font-size: 24px;
  font-weight: 700;
  color: #9B59B6;
}

.score-max {
  font-size: 14px;
  color: #95A5A6;
}

.dimension-description {
  font-size: 14px;
  color: #7F8C8D;
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.dimension-result {
  margin-bottom: 12px;
}

.result-level {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.result-level.low {
  background: #EBF5FB;
  color: #3498DB;
}

.result-level.medium {
  background: #FEF5E7;
  color: #F39C12;
}

.result-level.high {
  background: #FDEDEC;
  color: #E74C3C;
}

.result-text {
  font-size: 14px;
  color: #34495E;
  margin: 0;
  line-height: 1.6;
}

.warning-box {
  display: flex;
  gap: 8px;
  padding: 12px;
  background: #FEF9E7;
  border-radius: 8px;
  margin-bottom: 8px;
}

.warning-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.warning-text {
  font-size: 13px;
  color: #D68910;
  margin: 0;
  line-height: 1.5;
}

.note-text {
  font-size: 13px;
  color: #7F8C8D;
  margin: 0;
  font-style: italic;
  line-height: 1.5;
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
}

.btn-primary,
.btn-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(155, 89, 182, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background: white;
  color: #9B59B6;
  border: 2px solid #9B59B6;
}

.btn-secondary:hover {
  background: #F5F0FF;
  transform: translateY(-2px);
}

.btn-secondary:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .title {
    font-size: 26px;
  }

  .subtitle {
    font-size: 14px;
  }

  .card {
    padding: 20px;
  }

  .summary-stats {
    gap: 20px;
  }

  .stat-value {
    font-size: 24px;
  }

  .radar-chart {
    height: 300px;
  }

  .dimension-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .result-page {
    padding: 12px;
  }

  .title {
    font-size: 22px;
  }

  .card {
    padding: 16px;
  }

  .dimension-item {
    padding: 16px;
  }

  .dimension-name {
    font-size: 16px;
  }

  .score-value {
    font-size: 20px;
  }
}
</style>

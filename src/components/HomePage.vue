<template>
  <div class="home-page">
    <div class="container">
      <div class="header">
        <div class="logo">
          <el-icon :size="60" color="#9B59B6">
            <Star />
          </el-icon>
        </div>
        <h1 class="title">麋鹿性偏向测试</h1>
        <p class="subtitle">探索真实的自己</p>
      </div>

      <div class="content">
        <div class="intro-card card">
          <h2 class="card-title">关于测试</h2>
          <div class="info-grid">
            <div class="info-item">
              <el-icon :size="32" color="#9B59B6">
                <Clock />
              </el-icon>
              <div class="info-text">
                <div class="info-label">测试时长</div>
                <div class="info-value">约15分钟</div>
              </div>
            </div>
            <div class="info-item">
              <el-icon :size="32" color="#9B59B6">
                <Document />
              </el-icon>
              <div class="info-text">
                <div class="info-label">题目数量</div>
                <div class="info-value">68题</div>
              </div>
            </div>
            <div class="info-item">
              <el-icon :size="32" color="#9B59B6">
                <DataAnalysis />
              </el-icon>
              <div class="info-text">
                <div class="info-label">测试维度</div>
                <div class="info-value">22大维度</div>
              </div>
            </div>
            <div class="info-item">
              <el-icon :size="32" color="#9B59B6">
                <Lock />
              </el-icon>
              <div class="info-text">
                <div class="info-label">隐私保护</div>
                <div class="info-value">严格保密</div>
              </div>
            </div>
          </div>
        </div>

        <div class="description-card card">
          <h2 class="card-title">测试说明</h2>
          <p class="description">
            麋鹿性偏向测试是一种专业的心理评估工具，旨在帮助个体深入了解自己在性行为、性幻想和性刺激方面的偏好特征。
            通过精心设计的问卷和专业的评估体系，测试能够全面评估个体的性偏好特点和相关人格特质。
          </p>
          <div class="features">
            <div class="feature-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <span>专业科学的评估体系</span>
            </div>
            <div class="feature-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <span>全面细致的维度分析</span>
            </div>
            <div class="feature-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <span>私密安全的测试环境</span>
            </div>
          </div>
        </div>

        <div class="action-section">
          <button class="btn-primary" @click="startTest">
            开始测试
          </button>
          <p class="tip">测试结果仅供参考，不作为诊断依据</p>
        </div>
      </div>

      <div class="footer">
        <a href="#" class="footer-link">隐私政策</a>
        <span class="separator">|</span>
        <a href="#" class="footer-link">使用条款</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star, Clock, Document, DataAnalysis, Lock, CircleCheck } from '@element-plus/icons-vue'

const emit = defineEmits(['next'])

const startTest = () => {
  emit('next')
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInDown 0.8s ease;
}

.logo {
  margin-bottom: 20px;
}

.title {
  font-size: 42px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #9B59B6 0%, #E91E63 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 20px;
  color: #7F8C8D;
  font-weight: 400;
}

.content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.card {
  margin-bottom: 30px;
  animation: fadeInUp 0.8s ease;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #2C3E50;
  margin-bottom: 24px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.info-text {
  flex: 1;
}

.info-label {
  font-size: 14px;
  color: #7F8C8D;
  margin-bottom: 4px;
}

.info-value {
  font-size: 20px;
  font-weight: 600;
  color: #2C3E50;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  color: #5A6C7D;
  margin-bottom: 24px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #5A6C7D;
}

.action-section {
  text-align: center;
  margin-top: 40px;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.btn-primary {
  display: inline-block;
  margin-bottom: 16px;
}

.tip {
  font-size: 14px;
  color: #95A5A6;
}

.footer {
  text-align: center;
  padding: 30px 0;
  margin-top: 40px;
  border-top: 1px solid #E8E8E8;
}

.footer-link {
  color: #7F8C8D;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #9B59B6;
}

.separator {
  margin: 0 16px;
  color: #BDC3C7;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
  }
  
  .subtitle {
    font-size: 18px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .description {
    font-size: 15px;
  }
}
</style>

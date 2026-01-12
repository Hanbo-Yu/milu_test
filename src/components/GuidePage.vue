<template>
  <div class="guide-page">
    <div class="container">
      <div class="header">
        <h1 class="title">欢迎开始您的探索之旅</h1>
        <p class="subtitle">请仔细阅读以下说明</p>
      </div>

      <div class="content">
        <div class="card">
          <h2 class="card-title">
            <el-icon :size="28" color="#9B59B6">
              <InfoFilled />
            </el-icon>
            测试说明
          </h2>
          <ul class="instruction-list">
            <li class="instruction-item">
              <span class="bullet">1</span>
              <span>请根据您的真实情况回答，不要过度思考</span>
            </li>
            <li class="instruction-item">
              <span class="bullet">2</span>
              <span>没有正确或错误的答案，选择最符合您想法的选项</span>
            </li>
            <li class="instruction-item">
              <span class="bullet">3</span>
              <span>您的回答将严格保密，不会泄露给任何第三方</span>
            </li>
            <li class="instruction-item">
              <span class="bullet">4</span>
              <span>测试结果仅供参考，不作为诊断依据</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h2 class="card-title">
            <el-icon :size="28" color="#9B59B6">
              <Lock />
            </el-icon>
            隐私保护声明
          </h2>
          <div class="privacy-items">
            <div class="privacy-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <div class="privacy-content">
                <div class="privacy-title">数据加密存储</div>
                <div class="privacy-desc">所有测试数据均采用端到端加密技术存储</div>
              </div>
            </div>
            <div class="privacy-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <div class="privacy-content">
                <div class="privacy-title">不收集个人信息</div>
                <div class="privacy-desc">无需注册登录，不收集任何个人身份信息</div>
              </div>
            </div>
            <div class="privacy-item">
              <el-icon color="#9B59B6">
                <CircleCheck />
              </el-icon>
              <div class="privacy-content">
                <div class="privacy-title">自动删除数据</div>
                <div class="privacy-desc">测试完成后，您的答案将自动从服务器删除</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card warning-card">
          <h2 class="card-title">
            <el-icon :size="28" color="#E91E63">
              <Warning />
            </el-icon>
            重要提示
          </h2>
          <p class="warning-text">
            本测试涉及个人隐私和敏感话题，请确保您在私密、安全的环境中完成测试。
            如果您感到不适，可以随时停止测试。测试结果仅供自我探索和参考，
            如需专业心理咨询，请寻求专业医生的帮助。
          </p>
        </div>

        <div class="action-section">
          <button class="btn-primary" @click="startTest">
            我已了解，开始测试
          </button>
          <button class="btn-secondary" @click="goBack">
            返回首页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { InfoFilled, Lock, CircleCheck, Warning } from '@element-plus/icons-vue'

const emit = defineEmits(['next', 'back'])

const startTest = () => {
  emit('next')
}

const goBack = () => {
  emit('back')
}
</script>

<style scoped>
.guide-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 18px;
  color: #7F8C8D;
}

.content {
  flex: 1;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.card {
  margin-bottom: 24px;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #2C3E50;
  margin-bottom: 24px;
}

.instruction-list {
  list-style: none;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #F0F0F0;
  font-size: 16px;
  color: #5A6C7D;
  line-height: 1.6;
}

.instruction-item:last-child {
  border-bottom: none;
}

.bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.privacy-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.privacy-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.privacy-content {
  flex: 1;
}

.privacy-title {
  font-size: 16px;
  font-weight: 600;
  color: #2C3E50;
  margin-bottom: 4px;
}

.privacy-desc {
  font-size: 14px;
  color: #7F8C8D;
}

.warning-card {
  background: linear-gradient(135deg, #FFF5F7 0%, #FFE8EC 100%);
  border: 2px solid #FFD6E0;
}

.warning-text {
  font-size: 15px;
  line-height: 1.8;
  color: #5A6C7D;
}

.action-section {
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.btn-secondary {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 16px;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .instruction-item,
  .warning-text {
    font-size: 15px;
  }
}
</style>

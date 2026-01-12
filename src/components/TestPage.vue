<template>
  <div class="test-page">
    <div class="container">
      <div class="header">
        <div class="progress-section">
          <div class="progress-label">
            <span>进度</span>
            <span class="progress-text">{{ currentQuestionIndex + 1 }} / {{ totalQuestions }}</span>
          </div>
          <el-progress 
            :percentage="progressPercentage" 
            :stroke-width="12"
            :show-text="false"
            color="#9B59B6"
          />
        </div>
      </div>

      <div class="content">
        <transition name="slide" mode="out-in">
          <div :key="currentQuestionIndex" class="question-card card">
            <div class="question-header">
              <span class="question-number">第 {{ currentQuestionIndex + 1 }} 题</span>
            </div>
            
            <h2 class="question-text">{{ currentQuestion.question }}</h2>
            
            <div class="options-container">
              <div 
                v-for="(option, index) in currentQuestion.options" 
                :key="option.value"
                class="option-item"
                :class="{ 
                  'selected': selectedOption === option.value,
                  'hover': hoveredOption === index
                }"
                @click="selectOption(option.value)"
                @mouseenter="hoveredOption = index"
                @mouseleave="hoveredOption = null"
              >
                <div class="option-radio">
                  <div class="radio-circle" :class="{ 'checked': selectedOption === option.value }">
                    <div v-if="selectedOption === option.value" class="radio-dot"></div>
                  </div>
                </div>
                <div class="option-content">
                  <span class="option-value">{{ option.value }}.</span>
                  <span class="option-text">{{ option.text }}</span>
                </div>
              </div>
            </div>

            <div class="navigation-buttons">
              <button 
                class="btn-secondary" 
                @click="previousQuestion"
                :disabled="currentQuestionIndex === 0"
              >
                <el-icon><ArrowLeft /></el-icon>
                上一题
              </button>
              
              <button 
                class="btn-primary" 
                @click="nextQuestion"
                :disabled="!selectedOption"
              >
                {{ isLastQuestion ? '提交测试' : '下一题' }}
                <el-icon v-if="!isLastQuestion"><ArrowRight /></el-icon>
              </button>
            </div>

            <div class="tip-section">
              <el-icon color="#9B59B6">
                <InfoFilled />
              </el-icon>
              <span>可以随时返回修改之前的答案</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ArrowLeft, ArrowRight, InfoFilled } from '@element-plus/icons-vue'
import { questionsData, calculateScores } from '../data/questions'

const emit = defineEmits(['next', 'back'])

const currentQuestionIndex = ref(0)
const selectedOption = ref(null)
const hoveredOption = ref(null)
const answers = ref({})

const questions = questionsData['sexual-preference'].questions
const totalQuestions = computed(() => questions.length)

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const progressPercentage = computed(() => {
  return Math.round(((currentQuestionIndex.value + 1) / totalQuestions.value) * 100)
})

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === totalQuestions.value - 1
})

const selectOption = (value) => {
  selectedOption.value = value
  answers.value[currentQuestion.value.id] = value
  
  setTimeout(() => {
    nextQuestion()
  }, 300)
}

const nextQuestion = () => {
  if (!selectedOption.value) return
  
  if (isLastQuestion.value) {
    submitTest()
  } else {
    currentQuestionIndex.value++
    selectedOption.value = answers.value[questions[currentQuestionIndex.value].id] || null
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    selectedOption.value = answers.value[questions[currentQuestionIndex.value].id] || null
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const submitTest = () => {
  const results = calculateScores(answers.value)
  emit('next', { answers: answers.value, results })
}

const handleKeyPress = (e) => {
  if (e.key === 'ArrowRight' && selectedOption.value) {
    nextQuestion()
  } else if (e.key === 'ArrowLeft') {
    previousQuestion()
  } else if (e.key >= 'A' && e.key <= 'E') {
    selectOption(e.key)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

.header {
  margin-bottom: 40px;
}

.progress-section {
  background: white;
  border-radius: 16px;
  padding: 24px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  color: #2C3E50;
  font-weight: 500;
}

.progress-text {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  color: #9B59B6;
}

.content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.question-card {
  animation: fadeInUp 0.5s ease;
  display: flex;
  flex-direction: column;
}

.question-header {
  margin-bottom: 24px;
  flex-shrink: 0;
}

.question-number {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.question-text {
  font-size: 24px;
  font-weight: 600;
  color: #2C3E50;
  line-height: 1.6;
  margin-bottom: 32px;
  min-height: 80px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex-shrink: 0;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  flex-shrink: 0;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: #F8F9FA;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-item:hover,
.option-item.hover {
  background: #F0F2F5;
  border-color: #9B59B6;
  transform: translateX(4px);
}

.option-item.selected {
  background: linear-gradient(135deg, #F5E6FF 0%, #E8D5F0 100%);
  border-color: #9B59B6;
  box-shadow: 0 4px 12px rgba(155, 89, 182, 0.2);
}

.option-radio {
  flex-shrink: 0;
}

.radio-circle {
  width: 24px;
  height: 24px;
  border: 2px solid #BDC3C7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.option-item.selected .radio-circle {
  border-color: #9B59B6;
}

.radio-dot {
  width: 12px;
  height: 12px;
  background: #9B59B6;
  border-radius: 50%;
  animation: scaleIn 0.2s ease;
}

.option-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.option-value {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  font-size: 18px;
  color: #9B59B6;
  min-width: 32px;
}

.option-text {
  font-size: 18px;
  color: #2C3E50;
}

.navigation-buttons {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: auto;
  flex-shrink: 0;
}

.btn-secondary:disabled,
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tip-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 8px;
  font-size: 14px;
  color: #7F8C8D;
  flex-shrink: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .question-text {
    font-size: 20px;
  }
  
  .option-item {
    padding: 16px 20px;
  }
  
  .option-value,
  .option-text {
    font-size: 16px;
  }
  
  .navigation-buttons {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>

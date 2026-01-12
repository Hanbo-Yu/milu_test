<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="currentComponent" @next="handleNext" @back="handleBack" @restart="handleRestart" :results="testResults" />
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HomePage from './components/HomePage.vue'
import GuidePage from './components/GuidePage.vue'
import TestPage from './components/TestPage.vue'
import ResultPage from './components/ResultPage.vue'

const currentStep = ref('home')
const testAnswers = ref({})
const testResults = ref(null)

const currentComponent = computed(() => {
  switch (currentStep.value) {
    case 'home':
      return HomePage
    case 'guide':
      return GuidePage
    case 'test':
      return TestPage
    case 'result':
      return ResultPage
    default:
      return HomePage
  }
})

const handleNext = (data) => {
  if (data && data.answers) {
    testAnswers.value = data.answers
  }
  if (data && data.results) {
    testResults.value = data.results
  }
  
  const stepOrder = ['home', 'guide', 'test', 'result']
  const currentIndex = stepOrder.indexOf(currentStep.value)
  if (currentIndex < stepOrder.length - 1) {
    currentStep.value = stepOrder[currentIndex + 1]
  }
}

const handleBack = () => {
  const stepOrder = ['home', 'guide', 'test', 'result']
  const currentIndex = stepOrder.indexOf(currentStep.value)
  if (currentIndex > 0) {
    currentStep.value = stepOrder[currentIndex - 1]
  }
}

const handleRestart = () => {
  currentStep.value = 'home'
  testAnswers.value = {}
  testResults.value = null
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #FAFAFA 0%, #F5F0FF 100%);
}
</style>

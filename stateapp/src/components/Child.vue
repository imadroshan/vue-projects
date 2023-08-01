<script setup>
import GrandChild from './GrandChild.vue';
// import useNumbers from '../composables/useNumbers'
// import {inject} from 'vue'
// const numbers = inject("numbers")

import {useNumbersStore} from '../stores/numbers'

const {numbers, addNumber} = useNumbersStore()
</script>

<template>
<div>
    <h1>Child: {{numbers}}</h1>
    <button @click="addNumber(10)">Add Number</button>
    <div class="line"></div>
    <GrandChild />
</div>
</template>

<style scoped>
</style>
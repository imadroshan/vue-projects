<script setup>
import GreatGrandChild from './GreatGrandChild.vue'
import { useNumbersStore } from '../stores/numbers';

const {doubleNumbers, filterNumber} = useNumbersStore()

</script>

<template>
<div>
    <h1>GrandChild</h1>
    <div>{{doubleNumbers}}</div>
    <div>{{filterNumber(18)}}</div>
    <div class="line"></div>
    <GreatGrandChild />
</div>
</template>

<style scoped>
</style>
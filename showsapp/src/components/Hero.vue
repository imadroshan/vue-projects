<script setup>
import { defineProps, defineEmits } from 'vue';

const {isBreakingBad} = defineProps(['isBreakingBad'])
const emit = defineEmits(["selectedShow"])
const emitSelectedShow = ()=> {
    emit("selectedShow")
}
</script>

<template>
<div class="hero">
    <h1>{{isBreakingBad ? "Breaking Bad Card" : "Rick and morty"}}</h1>
    <p @click="emitSelectedShow">{{!isBreakingBad ? "Breaking Bad Card" : "Rick and morty"}}</p>
</div>

</template>
<style scoped>
/* Hero Styles */
.hero {
    height : 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 70px;
    font-weight: bold;
}
.hero p {
    cursor: pointer;
}
</style>
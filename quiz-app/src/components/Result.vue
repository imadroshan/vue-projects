<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers'])
</script>
<template>
    <div class="results">
        <h1> Your Results </h1>
        <h1>
            {{numberOfCorrectAnswers}} / {{quizQuestionLength}}
        </h1>
        <RouterLink to="/">
            <button>Go to Home</button>
        </RouterLink>
    </div>
</template>

<style scoped>
.results{
    text-align: center;
    padding: 100px 0;
}

p{
    font-size: 30px;
    font-weight: bold;
}
h1{
    font-size: 80px;
}
</style>
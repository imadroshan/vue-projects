<script setup>
import q from "./data/data.json"
import {ref, watch} from "vue"

const quizes = ref(q)
const search = ref("")

watch(search, ()=>{
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search ...">
    </header>

    <div class="options-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
      <div class="card-text">
        <h2>{{quiz.name}}</h2>
        <p>{{quiz.questions.length}}</p>
      </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container{
  width: 1000px;
  margin: 0 auto;
}

header{
  margin-bottom: 10px;
  margin-top: 10px;  
  display: flex;
  align-items: center;
}

header h1{
  font-weight: bold;
  margin-right: 30px;
}

header input{
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.options-container{
  display: flex;
  flex: wrap;
  margin-top: 50px;
}

/* CARD */
.card{
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.4);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text{
  padding: 0 5px;
}

.card .card-text h2{
  font-weight: bold;
}
</style>
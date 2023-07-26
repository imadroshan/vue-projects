<script>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header class="container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
<Transition name="route">
  <RouterView />
</Transition>
</template>
<style scoped>
header{
  line-height: 1.5;
  max-width: 100vh;
}
.container{
  max-width: 300px;
  margin: 10 auto;
}

.container a{
  margin-right: 10px;
}
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-to{
  opacity: 1;
  transform: translateX(0px);
}
.route-enter-active{
  transition: all 0.5s ease;
}
</style>


<!-- Animating list elements-->

<!-- <script setup>
import {ref} from 'vue'

const names = ref(["Selena Damo", "Kevin Johnstone"])
const nameInput = ref("")
const addName = () => {
  names.value.unshift(nameInput.value)
  nameInput.value = ""
}
const removeName = (name) => {
  const index = names.value.indexOf(name)
  if (index !== -1) {
    names.value.splice(index, 1)
  }
}


</script>

<template>
  <div class="container">
    <input type="text" placeholder="Add invites ..." v-model="nameInput" @keypress.enter="addName">
    <TransitionGroup name="invitees">
      <li v-for="name in names" :key="name" @click="removeName(name)">{{name}}</li>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.container{
  width: 300px;
  margin: 0 auto;
}
.container input{
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px rgba(223, 219, 219, 0.35);
}
ul{
  display: inline;
  list-style: none;
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px ;
  margin-top: 10px;
  box-shadow: 1px 1px 5px rgba(255, 254, 254, 0.35);
  text-align: center;
  cursor: pointer;
}
.invitees-enter-from{
  opacity: 0;
  transform: translateY(-20px);
  scale: 0.5;
}
.invitees-enter-to{
  opacity: 1;
  transform: translateY(0px);
  scale: 1;
}
.invitees-enter-active{
  transition: all 0.5s ease;
}
.invitees-leave-from{
  opacity: 1;
  transform: translateY(0px);
  scale: 1;
}
.invitees-leave-to{
  opacity: 0;
  transform: translateY(-20px);
  scale: 0.5;
}
.invitees-leave-active{
  transition: all 0.5s ease;
  position: absolute;
}
.invitees-move{
  transition: all 0.5s ease;
}
</style> -->















<!-- Basic Animations-->



<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showText = ref(true)
</script>

<template>
  <main>
    <div class="container">
      <Transition name="fade">
        <h1 v-if="showText">Hello World</h1>
        <h1 v-else>Goodbye world</h1>
      </Transition>
    </div>
    <button @click="showText=!showText">Toggle</button>
  </main>
  <RouterView />
</template>

<style scoped>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
opacity: 1;
}
.fade-enter-active{
  transition: all 3s ease;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 3s ease;
}
.container{
  position: relative;
}
h1{
  position: absolute;
}
button{
  position: absolute;
  margin-top: 60px;
}
</style> -->

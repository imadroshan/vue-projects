<script setup>
import Parent from './components/Parent.vue'

// import {ref, reactive, provide} from 'vue'
// const numbers = ref([1,2,3,4,5,6,7,8,9])
// provide("numbers", numbers)

</script>



<template>
  <main>
    <Parent />
  </main>
</template>


<!-- <script setup>
import {ref, reactive} from 'vue'

// const red = ref(0)
// const green = ref(0)
// const blue = ref(0)

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0
// })

const color = reactive({
  red: 0,
  green: 0,
  blue: 0
})

</script>



<template>
  <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
    <div>
      <input type="number" v-model="color.red" placeholder="red">
      <input type="number" v-model="color.green" placeholder="green">
      <input type="number" v-model="color.blue" placeholder="blue">
    </div>
  </main>
</template> -->

<style scoped>
main{
  background-color: rgb(53, 43, 73);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
div{
  display: flex;
  flex-direction: column;
}

</style>

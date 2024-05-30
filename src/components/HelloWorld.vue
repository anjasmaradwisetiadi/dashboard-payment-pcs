
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <button type="button" class="btn btn-primary" @click="addCounter">Increment</button>
      <button type="button" class="btn btn-secondary ms-2" @click="removeCounter">Decrement</button>
      <button type="button" class="btn btn-secondary ms-2"> {{ storeCounter.doubleCount }}</button>
    </h3> 
  </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter';

const storeCounter = useCounterStore();

function addCounter(){
  storeCounter.increment();
}

function removeCounter(){
  storeCounter.decrement();
}

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

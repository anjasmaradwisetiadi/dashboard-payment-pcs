
<template>
  <div id="app w-full">
    <div class="hidden md:block lg:block w-full text-center">
      <div class="md:block mt-6 font-bold">
        Harus dalam ukuran layar mobile (<576px)
      </div>
    </div>
    <div
      class="sm:block md:hidden lg:hidden flex flex-col justify-center"
    >
      <Navbar></Navbar>
      <RouterView />
    </div>
  </div>

</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onUpdated} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

let windowWidth = ref(0);
let viewMobile = ref(true);

watch(windowWidth, (newValue, oldValue)=>{
  if (newValue >= 576) {
        return viewMobile.value = false
      } else {
        return viewMobile.value = true
      }
})

onMounted(()=>{
  onResize
})

onUpdated(()=>{
  window.addEventListener('resize', onResize)
})

function onResize() {
      windowWidth.value = window.innerWidth
      if (windowWidth.value >= 576) {
        return viewMobile.value = false
      } else {
        return viewMobile.value = true
      }
}



</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

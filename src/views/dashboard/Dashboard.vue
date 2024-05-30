<template>
    <div id="Dashboard">
        <div class="mt-16">
            <p>Dashboard Component</p>
            <button type="submit" class="flex w-2/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {useDashboardStore} from '../../stores/dashboard';

const dashboardStore = useDashboardStore();
const getUser = reactive(dashboardStore.user)
const getNews = reactive(dashboardStore.news)
const getPersonOnline = reactive(dashboardStore.personOnline)

// const getNews = computed(()=>{
//     return dashboardStore.news
// })
// 
// 
// const getPersonOnline = computed(()=>{
//     return dashboardStore.personOnline
// })

onMounted(()=>{
    console.log('get User = ');
    console.log(getUser);
    console.log('getNews = ');
    console.log(getNews);
    console.log('getPersonOnlin = ');
    console.log(getPersonOnline.data);
})


</script>

<style scoped>

</style>
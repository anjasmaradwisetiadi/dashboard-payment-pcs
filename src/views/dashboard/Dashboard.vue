<template>
    <div id="Dashboard" class="flex flex-col min-h-screen">
        <main class="mt-12 relative flex-grow">
            <Profile></Profile>
            <UserStatus></UserStatus>
        </main>
        <NavbarBottom></NavbarBottom>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import NavbarBottom from '../../components/NavbarBottom.vue'
import Profile from './Profile.vue'
import UserStatus from './UserStatus.vue';
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
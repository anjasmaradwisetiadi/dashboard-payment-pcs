<template>
    <div id="Dashboard" class="flex flex-col min-h-screen">
        <main class="mt-16 relative flex-grow">
            <p>Dashboard Component</p>
            <div>
                <button type="submit" class="flex w-2/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
        </main>
        <footer class="flex flex-row justify-start w-screen title text-center pb-3 pt-2 border-b-2 px-4 border-t z-10 bg-white shadow-md">
            <div class="w-2/12" >
                <div class="text-center leading-3">
                    <div class="flex justify-center">
                        <span class="material-icons-outlined icon-active" style="font-size: 24px;">
                                home
                        </span>
                    </div>
                    <div class="text-xs word-active font-semibold">
                        Home
                    </div>
                </div>
            </div>
            <div class="w-2/12">
                <div class="text-center leading-3">
                    <div class="flex justify-center">
                        <span class="material-icons text-gray-500" style="font-size: 24px;">
                            event_available
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 font-semibold">
                        Attendance
                    </div>
                </div>
            </div>
            <div class="w-4/12">
                 Checkout
            </div>
            <div class="w-2/12">
                <div class="text-center leading-3">
                    <div class="flex justify-center">
                        <span class="material-icons text-gray-500" style="font-size: 24px;">
                            assignment
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 font-semibold">
                        Form
                    </div>
                </div>
            </div>
            <div class="w-2/12">
                <div class="text-center leading-3">
                    <div class="flex justify-center">
                        <span class="material-icons text-gray-500" style="font-size: 24px;">
                            settings
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 font-semibold">
                        Setting
                    </div>
                </div>
            </div>
        </footer>
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
.icon-active{
    color: #f83723;
}
.word-active{
    color: #f83723;
}
</style>
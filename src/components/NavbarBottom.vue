<template>
    <div id="NavbarBottom">
        <footer class="flex flex-row justify-start w-screen title text-center pb-3 pt-2 border-b-2 px-3 border-t z-10 bg-white shadow-top-nabvar">
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
            <div class=" relative flex-row w-4/12">
                <div class="flex relative justify-center z-20">
                    <div class="custom-style-checkout-icon z-20 absolute w-14 h-14 bg-red-primary flex justify-center items-center rounded-full shadow-top-checkout-icon">
                        <span class="material-icons text-white" style="font-size: 24px;">
                            exit_to_app
                        </span>
                    </div>
                </div>
                <div class="w-6 h-6">

                </div>
                <div class="relative text-xs text-red-primary font-semibold">
                    Checkout
                </div>
                 
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
import {useDashboardStore} from '../stores/dashboard';

const dashboardStore = useDashboardStore();
const getUser = reactive(dashboardStore.user)
const getNews = reactive(dashboardStore.news)
const getPersonOnline = reactive(dashboardStore.personOnline)

</script>

<style scoped>
.icon-active{
    color: #f83723;
}
.word-active{
    color: #f83723;
}
.shadow-top-nabvar{
    box-shadow: 0px 10px 10px 10px rgb(0 0 0 / 0.18);
}
.shadow-top-checkout-icon{
    box-shadow: 0px -3px 6px 2px rgb(0 0 0 / 0.22);
}
.custom-style-checkout-icon{
    top: -40px;
}
</style>
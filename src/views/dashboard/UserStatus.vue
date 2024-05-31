<template>
    <div id="User Status">
        <div class="relative flex flex-col px-3">
            <div>
                <div class="text-base font-bold">
                    Online
                </div>
            </div>
            <div class="relative flex flex-col shadow-md rounded-lg py-2 px-2 border mt-3">
                <!-- ********** it show when online user more than 10 user-->
                <div 
                    v-if="getPersonOnline?.length > 10 "
                    class="relative flex justify-center z-10 min-h-20 pl-4 mt-3">
                    <div
                        v-for="(data, index) in getPersonOnline"
                        :key="index" 
                        class="absolute flex flex-col leading-4 text-center"
                        :class="[`z-${index+1}`, (index+1) === 1 ? 'left-0':`left-[calc(${index}*2rem)]` ]"
                    >   
                        <template v-if="(index+1) <= 9">
                            <div class="">
                                <img class="w-10 h-10 rounded-full border-2 border-white" :src="imageSrc(data.image)" alt="user_profile">
                            </div>
                            <div class="text-[0.6rem] font-semibold leading-3">
                                {{ data.name }}
                            </div>
                            <div class="text-[0.6rem] font-extralight leading-3">
                                {{ data.status_work }}
                            </div>
                        </template> 
                        <template v-if="(index+1) === 10">
                            <div class="w-11 h-11 text-xs rounded-full border-2 border-white bg-gradient-to-r from-red-primary to-red-secondary text-xs flex item center text-white">
                                    10 more
                            </div>
                        </template>
                    </div>
                </div>
                
                <!-- ********** it show when online user less than 9 user-->
                <div
                    v-if="getPersonOnline?.length < 10" 
                    class="relative flex justify-center z-10 min-h-20 mt-2">
                    <div
                        v-for="(data, index) in getPersonOnline" 
                        :key="index"
                        class="relative flex flex-col leading-4 text-center ">
                        <div class="">
                            <img class="w-12 h-12 rounded-full border-2 border-white bg-center bg-cover" :src="imageSrc(data.image)" alt="user_profile">
                        </div>
                        <div class="text-xs font-semibold">
                            {{ data.name }}
                        </div>
                        <div class="text-xs font-extralight">
                            {{ data.status_work }}
                        </div>
                    </div>
                </div>

                <!-- ********** it show when no online -->
                <div
                    v-if="!getPersonOnline?.length"
                    class="relative flex justify-center items-center text-center z-10 min-h-20">
                    <div class="text-center font-semibold">
                        Not User Online
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, } from 'vue';
import {useDashboardStore} from '../../stores/dashboard';
import {utilize} from '../../utilize/index'
import {collectUrl} from '../../utilize/collectUrl'
const dashboardStore = useDashboardStore()

const getPersonOnline = computed(()=>{
    return dashboardStore.getterPersonOnline
})

onMounted(()=>{

})

// imageCallUrl use vite
function imageSrc(selectedItem) {
    return new URL(`${selectedItem}`, import.meta.url).href;
}


</script>

<style lang="css" scoped src="../../css/main.css"></style>
<style scoped>

</style>